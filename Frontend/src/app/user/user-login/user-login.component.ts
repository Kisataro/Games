import { Component } from '@angular/core';
import { FormControl, FormGroup, MaxValidator, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import * as alertifyjs from 'alertifyjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {

  constructor(private authService: AuthService, private router: Router) {}

  loginForm!: FormGroup;
  usernamePlaceholder: string = "Enter your username";
  passwordPlaceholder: string = "Enter your password";

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl(null, [Validators.required, Validators.maxLength(15)]),
      password: new FormControl(null, [Validators.required])
    })
  }

  onLogin(): void {
    console.log(this.loginForm.value)
    const token = this.authService.authUser(this.loginForm.value);
    if (token) {
      localStorage.setItem('token', token.username)
      alertifyjs.success("Login successful")
      this.router.navigate(['/'])
    } else {
      alertifyjs.error("Username or Password is incorrect.")
    }
  }

  onCancel() {
    this.loginForm.reset();
  }

}
