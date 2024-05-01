<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Category;

class CategoryController extends Controller
{
    public function index()
    {
        $data = Category::get(["id", "name"]);
        return response()->json($data, 200);
    }

    public function store(Request $request)
    {
        $data = Category::create($request->all());
        return response()->json($data, 201);
    }

    public function show($id)
    {
        $data = Category::find($id);
        return response()->json($data, 200);
    }

    public function update(Request $request, $id)
    {
        $data = Category::find($id);
        $data->update($request->all());
        return response()->json($data, 200);
    }

    public function destroy($id)
    {
        $data = Category::find($id);
        $data->delete();
        return response()->json("Category deleted", 200);
    }
}
