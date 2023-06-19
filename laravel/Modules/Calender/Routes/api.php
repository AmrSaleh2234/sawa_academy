<?php

use Illuminate\Http\Request;

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




Route::middleware('auth:api')->group(function () {

    Route::group(['prefix' => 'calender'], function () {
        Route::get('/', [\Modules\Calender\Http\Controllers\CalenderController::class, 'index'])->name('calender.index');
        Route::post('/create', [\Modules\Calender\Http\Controllers\CalenderController::class, 'store'])->name('calender.create');
        Route::get('/{calender}', [\Modules\Calender\Http\Controllers\CalenderController::class, 'show'])->name('calender.show');
        Route::post('/{calender}/update', [\Modules\Calender\Http\Controllers\CalenderController::class, 'update'])->name('calender.update');
        Route::delete('/{calender}/delete', [\Modules\Calender\Http\Controllers\CalenderController::class, 'destroy'])->name('calender.delete');
    });
});
