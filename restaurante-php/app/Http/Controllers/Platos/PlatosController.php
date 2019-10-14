<?php

namespace App\Http\Controllers\Platos;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class PlatosController extends Controller
{
   /*
    |--------------------------------------------------------------------------
    | PlatosController
    |--------------------------------------------------------------------------
    |
    | Este controlador es responsble de las operaciones CRUD para los platos.
    |
    */
   

    /**
     * Obtiene la lista de platos de la base de datos con sus respectivos detalles.
     *
     * @return json
     */
    public function listarPlatos(){
		
        try{
            //Llamo al procedimiento para obtener la lista de platos
            $platos = \DB::select('call listar_platos()');
            $ok = true;
        }catch(QueryException $ex){
            $platos = null;
            $ok = false;
        }

        $rtn = [
            'ok' => $ok,
            'result' => $platos
        ];
        //retorno los insumos en formato json y el HTTP status code 200
		return response()->json($rtn, 200);
	}

	/**
     * Registra un plato
     *
     * @param  Request $request
     * @return json
     */
    public function registrarPlato(Request $request){
        $plato = [];
        //Obtengo los parametros del request
        $plato[0] = $request->input('nombre_plato');
        $plato[1] = $request->input('precio');

        if(strcmp (($request->input('necesita_preparacion')),'Si' ) == 0){
			$plato[2] =1;
        }else{
        	$plato[2] =0;
        }


        try{
            //Llamo al procedimiento
            \DB::select('call registrar_platos(?,?, ?)', $plato);
            $ok = true;
            $result = "Plato registrado correctamente";
        }catch(QueryException $ex){
            $ok = false;
            $result = "Error al registrar el plato";
        }
        //retorno los platos en formato json y el HTTP status code 200
        $rtn = [
            'ok' => $ok,
            'result' => $result
        ];

        return response()->json($rtn, 200);
    }

        /**
     * Listar todos los insumos de un plato
     *
     * @param  Request $request
     * @return json
     */
    public function listarPlatos_Insumos($id_plato){
        $parametros = [];
        $parametros[0] = $id_plato;
         try{
            //Llamo al procedimiento para obtener la lista de insumos necesarios por plato
            $insumos = \DB::select('call listar_plato_insumos(?)', $parametros);              
            $ok = true;
        }catch(QueryException $ex){
            $insumos = null;
            $ok = false;
        }

        $rtn = [
            'ok' => $ok,
            'result' => $insumos
        ];
        //retorno los insumos en formato json y el HTTP status code 200
        return response()->json($rtn, 200);

    	
    }

    public function listarInsumos($id_plato){
        $parametros = [];
        $parametros[0] = $id_plato;
         try{
            //Llamo al procedimiento para obtener la lista de insumos necesarios por plato
            $insumos = \DB::select('call ver_insumos()');              
            $ok = true;
        }catch(QueryException $ex){
            $insumos = null;
            $ok = false;
        }

        $rtn = [
            'ok' => $ok,
            'result' => $insumos
        ];
        //retorno los insumos en formato json y el HTTP status code 200
        return response()->json($rtn, 200);

        
    }
}