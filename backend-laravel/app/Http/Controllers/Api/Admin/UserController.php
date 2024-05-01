<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{
    public function index()
    {
        $data = User::get(["id", "name"]);
        return response()->json($data, 200);
    }

    public function show($id)
    {
        $data = User::find($id);
        return response()->json($data, 200);
    }

    public function update(Request $request, $id)
    {
        $data = User::find($id);
        $data->update($request->all());
        return response()->json($data, 200);
    }

    public function destroy($id)
    {
        $data = User::find($id);
        $data->delete();
        return response()->json(null, 204);
    }
}
