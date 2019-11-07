import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../environments/environment';
import { HeaderService } from '../../shared/services/header.service';

@Injectable()
export class EntradasService {

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
        var url = this.apiUrl + "almacen/entradas";
        
        return this.http.get(url, this.httpOptions);
    }

    registrar(idInsumo:number, cantidad:number, descripcion:string): Observable<any>
    {
        var url = this.apiUrl + "almacen/entradas/registrar";
        var data = { idInsumo: idInsumo, cantidad: cantidad, descripcion:descripcion };
        
        return this.http.post<any>(url, data, this.httpOptions);
    }
}
