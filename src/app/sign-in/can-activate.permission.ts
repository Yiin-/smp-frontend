// can-activate.permission.ts

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';

import { AuthService } from '../auth/auth.service';

@Injectable()
export class CanActivateSignIn implements CanActivate {

    constructor(private auth: AuthService, private router: Router) { }

    canActivate() {
        if (!this.auth.signedIn()) {
            return true;
        } else {
            this.router.navigate(['dashboard']);
            return false;
        }
    }
}