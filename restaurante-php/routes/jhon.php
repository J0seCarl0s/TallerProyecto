<?php

use Illuminate\Http\Request;

Route::get('mesas','Mesas\MesasController@verMesas');
Route::post('mesas/registrar','Mesas\MesasController@registrarMesa');
Route::get('almacenControl','Almacen\AlmacenController@verExistencias');


Route::get('jhon',function (){
    return response()->json([
        "nombre"=>"jhon"
    ],200);
});