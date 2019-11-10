<?php

namespace App\Http\Controllers\Caja;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class CajaController extends Controller
{
    const CODIGOS_RESULTADO_ABRIRCAJA = [
    	'1' => 'Caja abierta correctamente',
    	'2' => 'La caja ya estaba abierta'
    ];

	const CODIGOS_RESULTADO_CERRARCAJA = [
    	'1' => 'Caja cerrada correctamente',
    	'2' => 'No hay una caja abierta'
    ];

    /**
     * Obtiene el estado actual de la caja. (El monto y si está abierta o no)
     *
     * @return json
     */
    public function obtenerEstadoCaja(){
        
        try{
            $result = collect(\DB::select('call obtener_estado_caja()'))->first();
            $ok = true;
        }catch(QueryException $ex){
            $result = null;
            $ok = false;
        }

        $rtn = [
            'ok' => $ok,
            'result' => $result
        ];
        //retorno los insumos en formato json y el HTTP status code 200
        return response()->json($rtn, 200);
    }

    /**
     * Abre la caja del restaurante con un monto inicial dado
     * 
     * @param Request $request
     * 
     * @return json
     */
    public function abrirCaja(Request $request){
		$parametros = [];
		$parametros[0] = $request->input('monto_inicial');

        try{
            $select = collect(\DB::select(
            	'call abrir_caja(?)', $parametros))->first();

            $codigo_resultado = $select->resultado;
            $ok = $codigo_resultado == 1;
            $result = self::CODIGOS_RESULTADO_ABRIRCAJA[$codigo_resultado];

        }catch(QueryException $ex){
            $ok = false;
            $result = "No se pudo abrir la caja";
        }

        $rtn = [
            'ok' => $ok,
            'result' => $result
        ];

        return response()->json($rtn, 200);
	}

	/**
     * Abre la caja del restaurante con un monto inicial dado
     * 
     * @param Request $request
     * 
     * @return json
     */
    public function cerrarCaja(Request $request){
		$parametros = [];
		$parametros[0] = $request->input('monto_final_ingresado');

        try{
            $select = collect(\DB::select(
            	'call cerrar_caja(?)', $parametros))->first();

            $codigo_resultado = $select->resultado;
            $ok = $codigo_resultado == 1;
            $result = self::CODIGOS_RESULTADO_CERRARCAJA[$codigo_resultado];

        }catch(QueryException $ex){
            $ok = false;
            $result = "No se pudo cerrar la caja";
        }

        $rtn = [
            'ok' => $ok,
            'result' => $result
        ];

        return response()->json($rtn, 200);
	}
}
