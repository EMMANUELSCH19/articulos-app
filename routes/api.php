<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\Client\AuthController;
use App\Http\Controllers\Api\Admin\UserController;
use App\Http\Controllers\Api\Admin\CategoriaController;
use App\Http\Controllers\Api\Client\ArticuloController;


Route::prefix('v1')->group(function () {
    // ::public
    // Route::get('/public/{slug}', [FrontController::class, 'categoria']);
  
    // ::auth
    Route::post('/auth/register', [AuthController::class, 'register']);
    Route::post('/auth/login', [AuthController::class, 'login']);
  
  
    // ::private
    Route::group(['middleware' => ['auth:sanctum']], function () {
      // ::auth
      Route::post('/auth/logout', [AuthController::class, 'logout']);
      
      // ::rol client
    //   Route::apiResource('/client/Articulo', ArticuloController::class);
  
  
      // ::rol admin
      Route::apiResource('/admin/user', UserController::class);
      Route::apiResource('/admin/categoria', CategoriaController::class);
      Route::apiResource('/admin/articulo', ArticuloController::class);
  
    });
    
  
  });
  
//   Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//       return $request->user();
//   });
  

  

// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');
