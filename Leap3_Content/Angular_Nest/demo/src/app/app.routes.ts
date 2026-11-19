import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Login } from './login/login';
import { authGuard } from './auth-guard';

export const routes: Routes = [
    {path:'', redirectTo:'home',pathMatch:'full'},
    {path:'home', component:Home},
    {path:'login', loadComponent:()=> import('./login/login').then( m => m.Login)},
    // {path:'login', component:Login},
    {path:'profile', loadComponent:()=> import('./profile/profile').then( m => m.Profile),
        canActivate:[authGuard]
    },
];
