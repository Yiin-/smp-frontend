import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';

import { AuthService } from '../auth/auth.service';

@Component({
    selector: 'app-sign-in',
    templateUrl: './sign-in.component.html',
    styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
    private signInUrl = '/auth/login';

    form: FormGroup;
    formState: String = 'OK';

    constructor(formBuilder: FormBuilder, private http: Http, private authService: AuthService, private router: Router) {
        this.form = formBuilder.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    submit() {
        if (!this.form.valid) {
            return;
        }
        this.formState = 'WAITING';

        this.http.post(this.signInUrl, this.form.value)
            .toPromise()
            .then((response: Response) => {
                const data = response.json();
                const token = data.token;

                this.authService.signIn(token);

                this.router.navigate(['/']);
            })
            .catch((error: Response | any) => {
                this.formState = 'ERROR';
            });
    }

}