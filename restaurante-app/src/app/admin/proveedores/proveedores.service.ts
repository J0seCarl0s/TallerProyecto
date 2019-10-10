import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../environments/environment';
import { HeaderService } from '../../shared/services/header.service';


@Injectable()
export class ProveedoresService
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
        var url = this.apiUrl + "proveedores";
        
        return this.http.get(url, this.httpOptions);
    }

    mostrar(idProveedor: number): Observable<any>
    {
        var url = this.apiUrl + "proveedores/mostrar/"+idProveedor;
        
        return this.http.get(url, this.httpOptions);
    }

    registrar(nombre:string,direccion:string, descripcion:string): Observable<any>
     {
        var url = this.apiUrl + "proveedores/registrar";
        var data = { 
            nombre:nombre,
            descripcion:descripcion,
            direccion:direccion
        };
        
        return this.http.post<any>(url, data, this.httpOptions);
     }

     editar(id: number, nombre:string,direccion:string, descripcion:string): Observable<any>
     {
        var url = this.apiUrl + "proveedores/editar";
        var data = { 
            id:id,
            nombre:nombre,
            direccion:direccion,
            descripcion:descripcion
         };
        
        return this.http.post<any>(url, data, this.httpOptions);
     }

     eliminarProveedor(id:number)
     {
        var url = this.apiUrl + "proveedores/eliminar";
        var data = {
            id:id
        };
        return this.http.post<any>(url, data, this.httpOptions);
     }
}
