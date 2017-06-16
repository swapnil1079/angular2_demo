import { Route } from '@angular/router';
import { HomeRoutes,HomeComponent } from './home/index';
import { DashboardComponent } from './index';
import { ListingRoutes } from './listing/index';
export const DashboardRoutes: Route[] = [
  	{
    	path: 'dashboard',
    	component: DashboardComponent,
    	children: [
	    	...HomeRoutes,
	    	...ListingRoutes
	    ]
  	}
];
