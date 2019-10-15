<?php

use Illuminate\Http\Request;

Route::post('platos/eliminar','Platos\PlatosController@eliminarPlato');
Route::post('platos/editar', 'Platos\PlatosController@editarPlato');
Route::get('platos/mostrar/{id}', 'Platos\PlatosController@obtenerPlato');
Route::post('platos/habilitar', 'Platos\PlatosController@habilitarPlato');
Route::post('platos/deshabilitar', 'Platos\PlatosController@deshabilitarPlato');

Route::get('iver',function (){
    return response()->json([
        "nombre"=>"iver"
    ],200);
});