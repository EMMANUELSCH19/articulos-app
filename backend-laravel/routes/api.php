<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\Admin\UserController;
use App\Http\Controllers\Api\Admin\CategoryController;
use App\Http\Controllers\Api\Client\ArticleController;


// use Spatie\Permission\Models\Role;

// $role = Role::create(['name' => 'admin']);
// $role = Role::create(['name' => 'client']);


Route::prefix('v1')->group(function () {
    // ::public
    // Route::get('/public/{slug}', [FrontController::class, 'category']);
  
    // ::auth
    Route::post('/auth/register', [AuthController::class, 'register']);
    Route::post('/auth/login', [AuthController::class, 'login']);
  
  
    // ::private
    Route::group(['middleware' => ['auth:sanctum']], function () {
      // ::auth
      Route::post('/auth/logout', [AuthController::class, 'logout']);
      
      // ::rol client
    //   Route::apiResource('/client/article', ArticleController::class);
  
  
      // ::rol admin
      Route::apiResource('/admin/user', UserController::class);
      Route::apiResource('/admin/category', CategoryController::class);
      Route::apiResource('/admin/article', ArticleController::class);
  
    });
    
  
  });