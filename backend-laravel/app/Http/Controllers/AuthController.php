<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

class AuthController extends Controller
{
    public function register(Request $request) {
        try {
            $validatedData = $request->validate([
                'name' => 'required|max:55',
                'email' => 'email|required|unique:users',
                'password' => 'required|confirmed'
            ]);

            $validatedData['password'] = bcrypt($request->password);
            $user = User::create($validatedData);

            $accessToken = $user->createToken('authToken')->accessToken;

            return response()->json(['token' => $accessToken], 200);

        } catch (\Illuminate\Validation\ValidationException $e){
            return response()->json(['errors' => $e->errors()], 422);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Internal Server Error'], 500);
        } 
    }

    public function login(Request $request) {
        try {
            $credentials = $request->validate([
                'email' => 'email|required',
                'password' => 'required'
            ]);

            if (Auth::attempt($credentials)) {
                $accessToken = Auth::user()->createToken('authToken')->accessToken;
                return response()->json(['token' => $accessToken], 200);
            } else {
                return response()->json(['error' => 'Unauthorized'], 401);
            }

        } catch (\Illuminate\Validation\ValidationException $e){
            return response()->json(['errors' => $e->errors()], 422);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Internal Server Error'], 500);
        }
    }
}
