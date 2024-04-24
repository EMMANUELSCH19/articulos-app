<?php

namespace App\Http\Controllers\Api\Client;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\User;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        // validate input data
        $validator = Validator::make($request->all(), [
            'name' => 'required|string',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|string|min:6|confirmed',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        $credentials = $validator->validated(); // save validated data to $credentials
        $credentials['password'] = bcrypt($credentials['password']); // bcrypt password


        $user = User::create($credentials);
        $user->assignRole('client');

        return response()->json([
            'success' => true,
            'message' => 'User created successfully',
        ]);
    }

    public function login(Request $request)
    {   
        // validate input data
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        // check if user exists
        if(!auth()->attempt($validator->validated())) {
            return response()->json([
                'message' => 'Unauthorized'
            ], 401);
        }

        
        $user = auth()->user(); // get authenticated user
        $user->hasRole('client'); //  check if user has client role
        
        $response['success'] = true;
        $response['token'] = $user->createToken('authToken')->plainTextToken;
        $response['user'] = $user;
        $response['message'] = 'Login successful';
        
        return response()->json($response, 200);
    }

    public function logout()
    {
        
        auth()->user()->tokens()->delete(); // delete user tokens


        return response()->json([
            'success' => true,
            'message' => 'Logout successful',
        ], 200);
    }
}
