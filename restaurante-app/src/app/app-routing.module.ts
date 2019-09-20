import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TokenGuard } from './shared/guards/token.guard';

import { LoginComponent } from './security/login/login.component';
import { ContainerInsideAdminComponent } from './shared/components/container-inside-admin/container-inside-admin.component';
import { DashboardAdminComponent } from './admin/dashboard-admin/dashboard-admin.component';

import { Page404Component } from './shared/components/page404/page404.component';


export const ROUTING_COMPONENTS=[
  LoginComponent,
  ContainerInsideAdminComponent,
  DashboardAdminComponent,
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
      }
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
