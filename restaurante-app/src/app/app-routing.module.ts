import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TokenGuard } from './shared/guards/token.guard';

import { LoginComponent } from './security/login/login.component';
import { ContainerInsideAdminComponent } from './shared/components/container-inside-admin/container-inside-admin.component';
import { DashboardAdminComponent } from './admin/dashboard-admin/dashboard-admin.component';

import { Page404Component } from './shared/components/page404/page404.component';

import { PlatosListComponent } from './admin/platos/platos-list/platos-list.component';
import { PlatosEditComponent } from './admin/platos/platos-edit/platos-edit.component';
import { PlatosAddComponent } from './admin/platos/platos-add/platos-add.component';
import { PlatosInsumosComponent} from './admin/platos/platos-insumos-list/platos-insumos-list.component';
import { PlatosInsumosAddComponent} from './admin/platos/platos-insumos-add/platos-insumos-add.component';

import { InsumosListComponent } from './admin/insumos/insumos-list/insumos-list.component';
import { InsumosEditComponent } from './admin/insumos/insumos-edit/insumos-edit.component';
import { InsumosAddComponent } from './admin/insumos/insumos-add/insumos-add.component';
import { ProveedoresListComponent } from './admin/proveedores/proveedores-list/proveedores-list.component';
import { ProveedoresEditComponent } from './admin/proveedores/proveedores-edit/proveedores-edit.component';
import { ProveedoresAddComponent } from './admin/proveedores/proveedores-add/proveedores-add.component';


export const ROUTING_COMPONENTS=[
  LoginComponent,
  ContainerInsideAdminComponent,

  DashboardAdminComponent,
  PlatosListComponent,
  PlatosEditComponent,
  PlatosInsumosComponent,
  PlatosInsumosAddComponent,
  InsumosListComponent,
  InsumosEditComponent,
  InsumosAddComponent,
  ProveedoresListComponent,
  ProveedoresEditComponent,
  ProveedoresAddComponent,
  PlatosAddComponent,

  Page404Component
];

const routes: Routes = [
  {
    path:'',
    component:LoginComponent,
    pathMatch: 'full'
  },
  {
    path:'admin',
    canActivate:[TokenGuard],
    component:ContainerInsideAdminComponent,
    children:[
      {
				path: 'dashboard',
				component: DashboardAdminComponent
      },
      {
        path: 'platos',
        component: PlatosListComponent
      },
      {
        path: 'platos/agregar',
        component: PlatosAddComponent
      },
      {
        path: 'platos/editar/:id',
        component: PlatosEditComponent
      },
      {
        path: 'platos/mostrar/insumos/:id',
        component: PlatosInsumosComponent 
      },
      {
        path: 'platos/insumos/agregar/:id',
        component: PlatosInsumosAddComponent
      },
      {
				path: 'insumos',
				component: InsumosListComponent
      },
      {
				path: 'insumos/editar/:id',
				component: InsumosEditComponent
      },
      {
        path: 'insumos/agregar',
        component: InsumosAddComponent
      },
      {
				path: 'proveedores',
				component: ProveedoresListComponent
      },
      {
				path: 'proveedores/editar/:id',
				component: ProveedoresEditComponent
      },
      {
				path: 'proveedores/agregar',
				component: ProveedoresAddComponent
      },
    ]
  },
  { path: '**', component: Page404Component }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule { }
