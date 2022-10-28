<?php

use App\Http\Controllers\ContactController;
use App\Http\Controllers\ProjectController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', static function () {
    return Inertia::render('TheIndex');
})->name('about');

Route::get('/projects', [ProjectController::class, "index"])->name('projects');
Route::get('/projects/{slug}', [ProjectController::class, "show"])->name('projects.show');

Route::get('/contact', [ContactController::class, "index"])->name('contact');
Route::post('/contact', [ContactController::class, "store"])->name('contact.store');
