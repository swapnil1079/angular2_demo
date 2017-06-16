import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';



@NgModule({
    imports: [CommonModule,FormsModule,ReactiveFormsModule],
    declarations: [HomeComponent],
    exports: [HomeComponent]
})

export class HomeModule { }
