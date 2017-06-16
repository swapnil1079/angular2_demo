import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListingComponent } from './listing.component';
import {FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
    imports: [CommonModule,FormsModule,ReactiveFormsModule],
    declarations: [ListingComponent],
    exports: [ListingComponent]
})

export class ListingModule { }
