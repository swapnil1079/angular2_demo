import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms';
import { HomeModule } from './home/home.module';
import { ListingModule } from './listing/listing.module';

import { DashboardComponent } from './dashboard.component';

import { SidebarComponent } from '../shared/index';

@NgModule({
    imports: [
        CommonModule,
    	RouterModule,
    	HomeModule,ListingModule,FormsModule
    ],
    declarations: [DashboardComponent, SidebarComponent],
    exports: [DashboardComponent, SidebarComponent]
})

export class DashboardModule { }
