<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\ChildParent;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rule;
use Spatie\Permission\Models\Role;

class FrontAuthController extends Controller
{
    public function login(Request $request)
    {
        $request->validate([
            'email' => ['required', 'string'],
            'password' => ['required', 'string'],
        ]);

        $user = ChildParent::where('email', $request->email)->first();

        if (Hash::check($request->password, $user->password)) {
            $response = [
                'token' => $user->createToken($user->email)->plainTextToken,
                'user' => $user,
            ];

            return response($response, 202);
        } else {
            return response()->json(['message' => 'email or password does not match our records'], 401);
        }
    }
    public function register(Request $request)
    {
        $request->validate([
            'fname' => ['required', 'string'],
            'lname' => ['required', 'string'],
            'email' => ['required', 'string', Rule::unique('parents', 'email')],
            'phone' => ['required', 'string', Rule::unique('parents', 'email')],
            'password' => ['required', 'string', 'confirmed'],
        ]);

        $parent = ChildParent::create([
            'fname' => $request->fname,
            'lname' => $request->lname,
            'email' => $request->email,
            'phone' => $request->phone,
            'password' => Hash::make($request->password),
        ]);


        $token = $parent->createToken($parent->email)->plainTextToken;

        return response()->json([
            'token' => $token,
            'user' => $parent,
        ], 201);


        return response()->json($parent, 201);
    }
    public function user(Request $request)
    {
        $user = $request->user();

        return response()->json(['user' => $user], 200);
    }
    public function logout(Request $request)
    {
        $token = $request->user()->token();

        $token->revoke();

        $resposne = [
            'message' => "You have successfully been logged out!"
        ];

        return response($resposne, 200);
    }
}
