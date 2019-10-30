<?php

namespace App\Http\Controllers\Pedidos;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class PedidosController extends Controller
{
    const CODIGOS_REGISTRO = [
    	'1' => 'Pedido registrado correctamente',
    	'2' => 'El plato no existe o está desactivado',
    	'3' => 'La mesa no existe o está deshabilitada',
    	'4' => 'El mozo no existe o está deshabilitado'
    ];


    /**
     * Obtiene la lista de pedidos de una mesa.
     * 
     * @param integer $num_mesa El numero de mesa del cual se obtendran los pedidos
     * 
     * @return json
     */
    public function verPedidosDeMesa($num_mesa = null){
		
        $parametros = [];
        $parametros[0] = $num_mesa;
        
        try{
            $pedidos = \DB::select('call listar_pedidos_de_mesa(?)', $parametros);
            $ok = true;
        }catch(QueryException $ex){
            $pedidos = null;
            $ok = false;
        }

        $rtn = [
            'ok' => $ok,
            'result' => $pedidos
        ];

        return response()->json($rtn, 200);
	}

	/**
     * Registra un nuevo pedido
     *
     * @param  Request $request
     * @return json
     */
    public function registrarPedido(Request $request){
        $pedido = [];
        //Obtengo los parametros del request
        $pedido[0] = $request->input('idPlato');
        $pedido[1] = $request->input('numMesa');
        //OBTIENE EL USUARIO ACTUAL, SI NO HAY ENTONCES RETORNA 18. SE DEBE ELIMINAR
        //EL VALOR POR DEFECTO CUANDO TODAS LAS RUTAS ESTEN PROTEGIDAS
        $pedido[2] = Auth::user() != null ? Auth::user()->id : 18;

        try{
            //Llamo al procedimiento para registrar el usuario. La funcion select
            //retorna un array así que solo tomo el primer elemento del array
            $select = collect(\DB::select('call registrar_pedido(?, ?, ?)', $pedido))->first();

            $codigo_resultado = $select->resultado;
            $ok = $codigo_resultado == 1;
            $result = self::CODIGOS_REGISTRO[$codigo_resultado];

        }catch(QueryException $ex){
            $ok = false;
            $result = "Error al registrar el plato";
        }

        $rtn = [
            'ok' => $ok,
            'result' => $result
        ];

        return response()->json($rtn, 200);
    }	

}
