import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import {FormsModule}      from '@angular/forms';
import {HttpModule}       from '@angular/http';
import { AppComponent }   from './app.component';
import {routing}          from './app.routing';
import  {LoginModule}     from './login/login.module';
import {DashboardModule}  from './dashboard/dashboard.module';
import {SharedModule}     from  './shared/shared.module';

@NgModule({
  imports:[BrowserModule,FormsModule,HttpModule,LoginModule,routing,DashboardModule,SharedModule.forRoot()],
  declarations: [AppComponent],
  bootstrap:    [AppComponent]
})
export class AppModule { }


