import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { authGuard } from './guards/auth.guard';
import { loginGuard } from './guards/login.guard';

export const routes: Routes = [
    {path: 'login', component: LoginComponent, canActivate: [loginGuard]},
    {path: 'home', component: HomeComponent, canActivate: [authGuard]},
    {path:'**', component: LoginComponent}
];
