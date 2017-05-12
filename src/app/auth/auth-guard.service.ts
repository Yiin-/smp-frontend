// auth-guard.service.ts

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {

    constructor(private auth: AuthService, private router: Router) { }

    canActivate() {
        if (this.auth.signedIn()) {
            return true;
        } else {
            this.router.navigate(['sign-in']);
            return false;
        }
    }
}