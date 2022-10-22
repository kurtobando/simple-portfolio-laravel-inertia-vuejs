<?php

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

Route::get('/projects', static function () {
    return Inertia::render('TheProjects');
})->name('projects');

Route::get('/contact', static function () {
    return Inertia::render('TheContact');
})->name('contact');
