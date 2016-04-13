<?php

Route::group(['middleware' => ['cors', 'api']], function () {

    //Urls
    Route::post('/users/{userid}/urls', '\EncurtadorUrl\Controllers\UrlController@store');
    Route::get('/urls/{shortUrl}', '\EncurtadorUrl\Controllers\UrlController@index');
    Route::delete('/urls/{shortUrl}', '\EncurtadorUrl\Controllers\UrlController@destroy');

    //Stats
    Route::get('/stats', '\EncurtadorUrl\Controllers\StatsController@generalStats');
    Route::get('/users/{userid}/stats', '\EncurtadorUrl\Controllers\StatsController@userStats');
    Route::get('/stats/{shortUrl}', '\EncurtadorUrl\Controllers\StatsController@urlStats');

    //Users
    Route::post('/users', '\EncurtadorUrl\Controllers\UserController@store');
    Route::delete('/users/{userid}', '\EncurtadorUrl\Controllers\UserController@destroy');

});
