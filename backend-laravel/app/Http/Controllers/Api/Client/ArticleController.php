<?php

namespace App\Http\Controllers\Api\Client;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Article;

class ArticleController extends Controller
{
    public function index()
    {
        $data = Article::get(["id", "title"]);
        return response()->json($data, 200);
    }

    public function store(Request $request)
    {
        $data = Article::create($request->all());
        return response()->json($data, 201);
    }

    public function show($id)
    {
        $data = Article::find($id);
        return response()->json($data, 200);
    }

    public function update(Request $request, $id)
    {
        $data = Article::find($id);
        $data->update($request->all());
        return response()->json($data, 200);
    }

    public function destroy($id)
    {
        $data = Article::find($id);
        $data->delete();
        return response()->json("Article deleted", 200);
    }
}
