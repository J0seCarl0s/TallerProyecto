<?php

namespace App\Http\Controllers\Almacen;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class AlmacenController extends Controller
{
    //

	 /**
     * Obtiene la lista de pedidos de una mesa.
     * 
     * 
     * @return json
     */
    public function verExistencias(){
    	try{
            $existencias = \DB::select('call listar_existencias_almacen()');
            $ok = true;
        }catch(QueryException $ex){
            $existencias = null;
            $ok = false;
        }

        $rtn = [
            'ok' => $ok,
            'result' => $existencias
        ];

        return response()->json($rtn, 200);
    }
}
