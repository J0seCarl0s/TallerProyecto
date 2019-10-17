<?php

use Illuminate\Http\Request;

Route::post('usuarios/edit','User\UserController@editarUsuario');
Route::post('usuarios/activar','User\UserController@activarUsuario');
Route::get('usuarios/mostrar/{id}','User\UserController@obtenerDatosUsuario');