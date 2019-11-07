<?php

use Illuminate\Http\Request;

Route::post('platos/eliminar','Platos\PlatosController@eliminarPlato');
Route::post('platos/editar', 'Platos\PlatosController@editarPlato');
Route::get('platos/mostrar/{id}', 'Platos\PlatosController@obtenerPlato');
Route::post('platos/habilitar', 'Platos\PlatosController@habilitarPlato');
Route::post('platos/deshabilitar', 'Platos\PlatosController@deshabilitarPlato');


Route::get('pedidos/obtenerpedidossp', 'Pedidos\PedidosController@listarPedidosSinPreparacion');
Route::get('pedidos/obtenerpedidoscp', 'Pedidos\PedidosController@listarPedidosNecesitanPreparacion');
Route::get('pedidos/obtenerpedidosep', 'Pedidos\PedidosController@listarPedidosEnPreparacion');
Route::get('pedidos/obtenerpedidoslistos', 'Pedidos\PedidosController@listarPedidoslistos');
Route::post('pedidos/pasarpedidoaenpreparacion', 'Pedidos\PedidosController@pasarPedidoaEnPreracion');
Route::post('pedidos/pasarpedidoalisto', 'Pedidos\PedidosController@pasarPedidoaListo');
Route::get('pedidos/mostrar/{id}', 'Pedidos\PedidosController@obtenerPedido');
Route::post('pedidos/editar', 'Pedidos\PedidosController@editarPedido');
Route::post('pedidos/eliminar','pedidos\PedidosController@eliminarPedido');

Route::get('iver',function (){
    return response()->json([
        "nombre"=>"iver"
    ],200);
});