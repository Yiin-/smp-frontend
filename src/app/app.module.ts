import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, RequestOptions } from '@angular/http';
import { RouterModule } from '@angular/router';

import { NgSemanticModule } from 'ng-semantic/ng-semantic';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { CanActivateSignIn } from './sign-in/can-activate.permission';
import { AuthService } from './auth/auth.service';
import { AuthGuardService } from './auth/auth-guard.service';

import { AppRoutes } from './app.routes';
import { SignInComponent } from './sign-in/sign-in.component';

import { CustomRequestOptions } from './custom-request.options';

@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        PageNotFoundComponent,
        SignInComponent
    ],
    imports: [
        RouterModule.forRoot(AppRoutes),
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        NgSemanticModule
    ],
    providers: [
        { provide: RequestOptions, useClass: CustomRequestOptions },
        AuthService,
        AuthGuardService,
        CanActivateSignIn
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
