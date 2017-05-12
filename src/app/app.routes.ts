import { Routes } from '@angular/router';

import { SignInComponent } from './sign-in/sign-in.component';
import { CanActivateSignIn } from './sign-in/can-activate.permission';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { GoogleComponent } from './google/google.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { AuthGuardService } from './auth/auth-guard.service';

const AppRoutes: Routes = [
    {
        path: 'sign-in',
        component: SignInComponent,
        canActivate: [CanActivateSignIn]
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuardService]
    },
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'users',
        component: UsersComponent,
        canActivate: [AuthGuardService]
    },
    {
        path: 'google',
        component: GoogleComponent,
        canActivate: [AuthGuardService]
    },
    { path: '**', component: PageNotFoundComponent }
];

export { AppRoutes };