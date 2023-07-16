<?php

namespace App\Http\Controllers\Api;

use App\Exceptions\SawaException;
use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\Rules;
use Illuminate\Support\Str;
use Spatie\Permission\Guard;
use Spatie\Permission\Models\Role;

use function PHPSTORM_META\type;

class UserController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    function __construct()
    {
        $this->middleware('permission:users.index|users.create|users.show|users.edit|roles-delete', ['only' => ['index', 'store']]);
        $this->middleware('permission:users.create', ['only' => ['store']]);
        $this->middleware('permission:users.show', ['only' => ['show']]);
        $this->middleware('permission:users.edit', ['only' => ['update']]);
        $this->middleware('permission:users.delete', ['only' => ['destroy']]);
    }
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request): Response
    {
        $users = User::where('name', 'LIKE', '%' . $request->keyword . '%')->with('roles')->orderBy('id', 'DESC')->paginate($request->size);
        return response([
            'users' => $users,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request): Response
    {
        // return response(Guard::getDefaultName(static::class));
        $this->validate($request, [
            'name' => 'required|min:4',
            'email' => 'required|email',
            'password' => ['required', 'min:6'],
            'role' => ['required']
        ]);

        $user = null;
        DB::transaction(function () use (&$user, $request) {
            $user = User::create([
                'name' => $request->name,
                'email' => $request->email,
                'password' => bcrypt($request->password),
                'email_verified_at' => now(),
                'remember_token' => Str::random(10),
            ]);

            $role = Role::where('id', $request->role)->first();

            $rolePermissions = $role->permissions;

            $user->assignRole([$role]);
            $user->syncPermissions($rolePermissions);
        });
        return response([
            'user' => new UserResource($user),
            'message' => 'User Added Successfully!'
        ], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(User $user): Response
    {
        return response([
            'user' => new UserResource($user->permissions),
        ], 202);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, User $user): Response
    {
        $this->validate($request, [
            'name' => 'required|min:4',
            'email' => 'required|unique:users,email,' . $user->id,
            'role' => ['required']
        ]);

        DB::transaction(function () use (&$user, $request) {
            $user->update($request->only(['name', 'email']));

            $role = Role::where('id', $request->role)->first();
            // sync new roles
            $user->syncRoles([$role]);
            // sync new permissions via sent role
            $user->syncPermissions($role->permissions);
        });

        return response([
            'user' => new UserResource($user),
            'message' => 'User Updated successfully!'
        ], 202);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user): Response
    {

        $permissions = $user->getAllPermissions();
        $user->revokePermissionTo($permissions);
        $user->delete();

        return response([
            'message' => 'User Deleted successfully!'
        ], 200);
    }

    public function addPermissions(Request $request, User $user)
    {
        $request->validate([
            'roles' => ['array'],
        ]);

        $permissions = $user->getAllPermissions();

        $new_permissions = array_unique(array_merge($permissions->pluck('id')->toArray(), $request->roles));

        $user->syncPermissions($new_permissions);

        return response()->json(['message' => 'permissions granted successfully'], 202);
    }

    public function getUserPermissions(Request $request, User $user)
    {

        $permissions = $user->getAllPermissions();

        return response()->json(['user_permissions' => $permissions], 200);
    }

    public function syncPermissions(Request $request, User $user)
    {
        $request->validate([
            'roles' => ['array'],
            'roles.id' => ["integer"]
        ]);

        $new_permissions =  collect($request->roles)->pluck('id');

        $user->syncPermissions($new_permissions);

        return response()->json(['message' => 'permissions synced successfully'], 202);
    }
}
