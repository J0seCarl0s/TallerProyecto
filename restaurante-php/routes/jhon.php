<?php

use Illuminate\Http\Request;

Route::get('mesas','Mesas\MesasController@verMesas');
Route::post('mesas/registrar','Mesas\MesasController@registrarMesa');
Route::get('almacenControl','Almacen\AlmacenController@verExistencias');
Route::get('almacen/ajuste/mostrar/{id}', 'Almacen\AlmacenController@verExistencia');
Route::post('almacen/ajustar/{id}', 'Almacen\AlmacenController@ajustarCantidad');
Route::get('entrada/mostrar/{id}', 'EntradasAlmacen\EntradasAlmacenController@verEntrada');
Route::post('/entrada/editar/{id}', 'Almacen\AlmacenController@editarEntrada');


Route::get('jhon',function (){
    return response()->json([
        "nombre"=>"jhon"
    ],200);
});