import { Component } from '@angular/core';
import { FormControl, FormGroup, MaxValidator, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import * as alertifyjs from 'alertifyjs';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {

  username: string = '';
  private subscription: Subscription;

  constructor(private authService: AuthService, private router: Router) {

    this.subscription = this.authService.username$.subscribe(username => {
      this.username = username;
    });
  }

  loginForm!: FormGroup;
  usernamePlaceholder: string = "Enter your username";
  passwordPlaceholder: string = "Enter your password";

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl(null, [Validators.required, Validators.maxLength(15)]),
      password: new FormControl(null, [Validators.required])
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onLogin(): void {
    const { username, password } = this.loginForm.value;
    this.authService.authUser(username, password).subscribe(
      (response: any) => {
        const token = response.token;
        localStorage.setItem('token', token);
        alertifyjs.success("Login successful");
        this.router.navigate(['/']);
      },
      (error: any) => {
        alertifyjs.error("Username or Password is incorrect.");
      }
    );
  }

  onCancel() {
    this.loginForm.reset();
  }

}
