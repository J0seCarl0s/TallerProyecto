<?php

use Illuminate\Http\Request;



Route::get('jhon',function (){
    return response()->json([
        "nombre"=>"jhon"
    ],200);
});