<?php

use App\Http\Controllers\Admin\MessageController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ClientController;
use App\Http\Controllers\commcontroller;
use App\Http\Controllers\PanierController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\UtilisateurController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/login', [AuthController::class, 'login']);
Route::post('/logout',[AuthController::class,'logout']);
Route::apiResource('utilisateurs', UtilisateurController::class);
Route::apiResource('clients', ClientController::class);
Route::apiResource('categories', CategoryController::class);
Route::apiResource('products', ProductController::class);
// Route::post('/commm', [commcontroller::class, 'commm']);
Route::post('/comm', [CommController::class, 'store']);
Route::get('/index', [CommController::class, 'index']);

// Route::post('commm', commcontroller::class);
// Route::get('productsaff', [ProductController::class,'index']);


Route::prefix('panier')->group(function () {
    Route::get('/{id_client}', [PanierController::class, 'afficherPanier']);
    Route::post('/ajouterProduit', [PanierController::class, 'ajouterProduit']);
    Route::post('/ajouterlike', [PanierController::class, 'ajouterlike']);
    Route::delete('/supprimer-produit/{idPanierProduit}', [PanierController::class, 'supprimerProduit']);
});

Route::get('/ajouterMessage', [MessageController::class, 'ajouterMessage']);
Route::get('/admin/messages', 'Admin\MessageController@index');
Route::get('/admin/messages/{id}', 'Admin\MessageController@show');
Route::post('/admin/messages/{id}/reply', 'Admin\MessageController@reply');
