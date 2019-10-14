import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../environments/environment';
import { HeaderService } from '../../shared/services/header.service';


@Injectable()
export class PlatosService
{

	httpOptions:object;
    private apiUrl:string = environment.apiUrl;
    
    constructor(
		private http:HttpClient,
		private headerService:HeaderService
    )
    {
        let headers = new HttpHeaders();
        headers = headers.set("Content-Type", "application/json");
        
        this.httpOptions = { headers: headers };
    }

    listar(): Observable<any>
    {
        var url = this.apiUrl + "platos";
        
        return this.http.get(url, this.httpOptions);
    }

    mostrar(idPlato: number): Observable<any>
    {
        var url = this.apiUrl + "platos/mostrar/"+idPlato;
        
        return this.http.get(url, this.httpOptions);
    }

    registrar(nombrePlato:string, precioPlato:number,necesitaPrePlato:string): Observable<any>
     {
        var url = this.apiUrl + "platos/registrar";
        var data = { nombre_plato: nombrePlato, precio: precioPlato,necesita_preparacion: necesitaPrePlato };
        
        return this.http.post<any>(url, data, this.httpOptions);
     }

     editar(id:number, nombrePlato:string, precioPlato:number,necesitaPrePlato:string): Observable<any>
     {
        var url = this.apiUrl + "platos/editar";
        var data = { id_plato: id, nombre_plato: nombrePlato, precio_plato: precioPlato,necesita_preparacion: necesitaPrePlato  };
        
        return this.http.post<any>(url, data, this.httpOptions);
     }

      listarInsumosPlatos(id:number): Observable<any>
    {
        var url = this.apiUrl + "platos/mostrar/insumos/"+id;
        
        return this.http.get(url, this.httpOptions);
    }

    listarInsumos(id:number): Observable<any>
    {
        var url = this.apiUrl + "platos/insumos/agregar/"+id;
        
        return this.http.get(url, this.httpOptions);
    }




}