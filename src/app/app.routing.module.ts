import { dashboardRoutes } from './dashboard/dashboard.routes';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { AuthGuardService } from './auth/auth-guard.service';


const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { 
        path: '',
        children: dashboardRoutes,
        canActivate: [ AuthGuardService ], 
        component: DashboardComponent },
    { path: '**', redirectTo:'' },
 
    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
