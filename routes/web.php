<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome');
})->name('home');

Route::get('dashboard', function () {
    return Inertia::render('Dashboard');
});



Route::get('/users', function () {
    return Inertia::render('Users');
});


require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
