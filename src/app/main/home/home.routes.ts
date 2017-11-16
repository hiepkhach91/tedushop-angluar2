import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';

export const mainRoutes: Routes = [
    {
        path: '', component: HomeComponent, children: [
            { path: '', redirectTo: 'index', pathMatch: 'full' },
            { path: 'index', loadChildren: './home/home.module#HomeModule'},
        ]
    }
] 
