import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { MAT_DATE_LOCALE } from '@angular/material/core';

import { AppRoutingModule, ROUTING_COMPONENTS } from './app-routing.module';
import { AppMaterialModule } from './app-material.module';


import { DataTablesModule } from 'angular-datatables';
import { NgSelectizeModule } from 'ng-selectize';

// token
import { TokenGuard } from './shared/guards/token.guard';

// Servicios
import { AlertService } from './shared/services/alert.service';
import { HeaderService } from './shared/services/header.service';
import { TokenService } from './shared/services/token.service';

import { SecurityService } from "./security/security.service";
import { ProveedoresService } from "./admin/proveedores/proveedores.service";
import  { InsumosService } from "./admin/insumos/insumos.service";
import { UsuariosService} from "./admin/usuarios/usuarios.service";
import { RolesService} from "./admin/roles/roles.service";
<<<<<<< HEAD
import  { MesasService } from "./admin/mesas/mesas.service";
=======
import { MesasService } from "./mozo/mesas/mesas.service";
import { PedidosService } from "./mozo/pedidos/pedidos.service";
import { PlatosService } from "./mozo/platos/platos.service";
import { EntradasService } from "./adminalmacen/entradas/entradas.service";
>>>>>>> 814c07416a5677ca3004e6f6639ad9c5b332c514

import { AngularDateTimePickerModule } from 'angular2-datetimepicker';

import { AppComponent } from './app.component';

import { MatDialogModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    ROUTING_COMPONENTS
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppMaterialModule,
    DataTablesModule,
    AngularDateTimePickerModule,
    MatDialogModule,
  ],
  providers: [
    DatePipe,
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' },

  	TokenGuard,

    AlertService,
    HeaderService,
    TokenService,

    SecurityService,
    ProveedoresService,
    InsumosService,
    UsuariosService,
    RolesService,
<<<<<<< HEAD
    MesasService
=======

    //SERVICIOS DEL MOZO
    MesasService,
    PedidosService,
    PlatosService,

    //SERVICIOS DEL ALMACENERO
    EntradasService    
>>>>>>> 814c07416a5677ca3004e6f6639ad9c5b332c514
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
