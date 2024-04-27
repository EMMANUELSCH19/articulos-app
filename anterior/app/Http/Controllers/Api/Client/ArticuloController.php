<?php

namespace App\Http\Controllers\Api\Client;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Articulo;

class ArticuloController extends Controller
{
    public function index()
    {
        $data = Articulo::get(["id", "titulo"]);
        return response()->json($data, 200);
    }

    public function store(Request $request)
    {
        $data = Articulo::create($request->all());
        return response()->json($data, 201);
    }

    public function show($id)
    {
        $data = Articulo::find($id);
        return response()->json($data, 200);
    }

    public function update(Request $request, $id)
    {
        $data = Articulo::find($id);
        $data->update($request->all());
        return response()->json($data, 200);
    }

    public function destroy($id)
    {
        $data = Articulo::find($id);
        $data->delete();
        return response()->json("Articulo eliminada", 200);
    }

}
