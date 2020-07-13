<?php

use App\Http\Controllers\TodoController;
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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/','TodoController@index')->name('todo.index');
// Route::get('/create','TodoController@create')->name('todo.create');
Route::post('/store', 'TodoController@store')->name('todo.store');
Route::delete('/delete', 'TodoController@delete')->name('todo.delete');
