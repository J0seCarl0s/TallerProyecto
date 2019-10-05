<?php

namespace App\Http\Controllers\Insumos;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class InsumosController extends Controller
{
	/*
    |--------------------------------------------------------------------------
    | InsumosController
    |--------------------------------------------------------------------------
    |
    | Este controlador es responsble de las operaciones CRUD para los insumos.
    |
    */


    /**
     * Obtiene la lista de insumos de la base de datos con sus respectivos detalles.
     *
     * @return json
     */
    public function verInsumos(){
		//Llamo al procedimiento para obtener los insumos
		$insumos = \DB::select('call ver_insumos()');

		//retorno los insumos en formato json y el HTTP status code 200
		return response()->json($insumos, 200);
	}

	/**
     * Edita un insumo
     *
     * @param  Request $request
     * @return json con el resultado de la operacion
     */
    public function editarInsumo(Request $request){

	}

	/**
     * Registra un insumo 
     *
     * @param  Request $request
     * @return json
     */
    public function registrarInsumo(Request $request){

    }
}
