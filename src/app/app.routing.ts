import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {LoginRoutes} from  './login/index';
import {LoginComponent} from  './login/index';
import {DashboardRoutes,DashboardComponent} from './dashboard/index'; 
import {HomeRoutes,HomeComponent} from './dashboard/home/index'; 

const appRoutes : Routes =[
    ...DashboardRoutes,
{
	  path:'',
	  component:LoginComponent
}
];
export const routing : ModuleWithProviders = RouterModule.forRoot(appRoutes)