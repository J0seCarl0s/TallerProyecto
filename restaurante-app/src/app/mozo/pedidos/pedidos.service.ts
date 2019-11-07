import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../environments/environment';
import { HeaderService } from '../../shared/services/header.service';

@Injectable()
export class PedidosService {

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

    agregar(idPlato:number, numMesa:number): Observable<any>
    {
        var url = this.apiUrl + "pedidos/registrar";
        var data = {
            "idPlato": idPlato,
            "numMesa": numMesa
        };

        return this.http.post<any>(url, data, this.httpOptions);
    }

    listarDeMesa(numMesa:number): Observable<any>
    {
        var url = this.apiUrl + "pedidos/mesa/" + numMesa;
        
        return this.http.get(url, this.httpOptions);
    }
}
