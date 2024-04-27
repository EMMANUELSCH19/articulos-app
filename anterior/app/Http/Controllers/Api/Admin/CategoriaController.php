<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Categoria;

class CategoriaController extends Controller
{
    public function index()
    {
        $data = Categoria::get(["id", "nombre"]);
        return response()->json($data, 200);
    }

    public function store(Request $request)
    {
        $data = Categoria::create($request->all());
        return response()->json($data, 201);
    }

    public function show($id)
    {
        $data = Categoria::find($id);
        return response()->json($data, 200);
    }

    public function update(Request $request, $id)
    {
        $data = Categoria::find($id);
        $data->update($request->all());
        return response()->json($data, 200);
    }

    public function destroy($id)
    {
        $data = Categoria::find($id);
        $data->delete();
        return response()->json("Categoria eliminada", 200);
    }

}
