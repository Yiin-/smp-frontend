import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

    constructor(private router: Router) { }

    signedIn() {
        return tokenNotExpired();
    }

    signIn(token) {
        localStorage.setItem('token', token);
    }

    public signOut() {
        // Remove token from localStorage
        localStorage.removeItem('token');

        this.router.navigate(['sign-in']);
    };

}
