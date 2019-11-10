<?php

use Illuminate\Http\Request;

Route::get('/usuarios', 'User\UserController@verUsuarios');
Route::post('/usuarios/registrar', 'User\UserController@registrarUsuario');
Route::post('/usuarios/eliminar', 'User\UserController@elminarUsuario');
Route::post('/usuarios/desactivar', 'User\UserController@desactivarUsuario');

Route::get('/pedidos/mesa/{num_mesa?}', 'Pedidos\PedidosController@verPedidosDeMesa');
Route::post('/pedidos/registrar', 'Pedidos\PedidosController@registrarPedido');

Route::get('/almacen/entradas', 'EntradasAlmacen\EntradasAlmacenController@verEntradas');
Route::post('/almacen/entradas/registrar', 'EntradasAlmacen\EntradasAlmacenController@registrarEntrada');

Route::post('/caja/abrir', 'Caja\CajaController@abrirCaja');
Route::post('/caja/cerrar', 'Caja\CajaController@cerrarCaja');
Route::get('/caja', 'Caja\CajaController@obtenerEstadoCaja');