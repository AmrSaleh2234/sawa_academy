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
            'password' => ['required', 'string', 'confirmed'],
        ]);


        if (Auth::guard('parent')->attempt($request->only(['email', 'password']))) {
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




        $token = $parent->createToken('LaravelPassportAuth')->accessToken;

        return response()->json([
            'token' => $token,
            'user' => $parent,
        ], 201);


        return response()->json($parent, 201);
    }
    public function user(Request $request)
    {
    }
    public function logout(Request $request)
    {
    }
}
