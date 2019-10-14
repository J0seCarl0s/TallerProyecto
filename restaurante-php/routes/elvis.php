<?php

use Illuminate\Http\Request;

Route::get('elvis',function (){
    return response()->json([
        "nombre"=>"elvis"
    ],200);
});