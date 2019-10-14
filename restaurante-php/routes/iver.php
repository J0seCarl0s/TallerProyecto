<?php

use Illuminate\Http\Request;

Route::get('iver',function (){
    return response()->json([
        "nombre"=>"iver"
    ],200);
});