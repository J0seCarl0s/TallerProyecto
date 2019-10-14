<?php

use Illuminate\Http\Request;

Route::get('jose',function (){
    return response()->json([
        "nombre"=>"jose"
    ],200);
});