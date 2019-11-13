import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../environments/environment';
import { HeaderService } from '../../shared/services/header.service';

@Injectable()
export class MesasService {

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

    //listar(): Observable<any>
    listar(): any
    {
        var url = this.apiUrl + "mesas";
        
        var result = {
        	"ok": true,
        	"result": [
        		{
        			"numMesa": 1,
        			"activo" : true
        		},
        		{
        			"numMesa": 2,
        			"activo" : true
        		},
        		{
        			"numMesa": 3,
        			"activo" : true
        		},
        		{
        			"numMesa": 4,
        			"activo" : false
        		},
                {
                    "numMesa": 5,
                    "activo" : true
                },
                {
                    "numMesa": 6,
                    "activo" : true
                }
        	]
        }

        return result;

        //Descomentar cuando se haya implementado
        //return this.http.get(url, this.httpOptions);
    }

}
