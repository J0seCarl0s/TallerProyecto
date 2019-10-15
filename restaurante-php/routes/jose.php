<?php

use Illuminate\Http\Request;

Route::get('/usuarios', 'User\UserController@verUsuarios');
Route::post('/usuarios/registrar', 'User\UserController@registrarUsuario');
Route::post('/usuarios/eliminar', 'User\UserController@elminarUsuario');
Route::post('/usuarios/desactivar', 'User\UserController@desactivarUsuario');
