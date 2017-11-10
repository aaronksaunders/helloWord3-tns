import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from "../authentication/auth.service";


@Component({
    selector: 'app-signin',
    moduleId: module.id,
    templateUrl: 'signin.component.html',
    //styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

    loginForm:FormGroup;
    error = false;
    errorMessage = '';

    constructor(private authService: AuthService) {
        this.loginForm = new FormGroup({
            email: new FormControl('', [Validators.required, Validators.min(8)]),
            password: new FormControl('', [Validators.required, Validators.min(8)])
        });
    }

    get diagnostic() { return JSON.stringify(this.loginForm.status) }

    doLogin(){
        console.log("doLogin", JSON.stringify(this.loginForm.value))
    }

    onSignin() {
        this.authService.signIn(this.loginForm.value);
    }

    ngOnInit(): any {
        console.log("login for initialized")
    }
}