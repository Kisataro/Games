import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import * as alertifyjs from 'alertifyjs';


@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {}

  registrationForm!: FormGroup;
  usernamePlaceholder: string = "Max. 15 characters";
  passwordPlaceholder: string = "Min. 5 characters";

  user!: User;

  ngOnInit(): void {
    this.registrationForm = new FormGroup({
      username: new FormControl(null, [Validators.required, Validators.maxLength(15)]),
      password: new FormControl(null, [Validators.required, Validators.minLength(5)]),
      confirmPassword: new FormControl(null, [Validators.required])
    }, this.passwordMatchingValidator);
  }

  passwordMatchingValidator(fc: AbstractControl):ValidationErrors|null {
    return fc.get('password')?.value === fc.get('confirmPassword')?.value ? null :
    {notmatched: true};
  }

  get username() {
    return this.registrationForm.get('username') as FormControl;
  }

  get password() {
    return this.registrationForm.get('password') as FormControl;
  }

  get confirmPassword() {
    return this.registrationForm.get('confirmPassword') as FormControl;
  }

  onSubmit() {
    if (this.registrationForm.valid) {
     const user = this.registrationForm.value;
     this.userService.addUser(user).subscribe(
     response => {
      alertifyjs.success("You have registered successfully.")
      this.router.navigate(['user/login'])
     },
     error => {
      alertifyjs.error("Something went wrong. Try again.")
     }

     )
    }
    this.registrationForm.reset();
  }

  userData(): User {
    return this.user = {
      username: this.username.value,
      password: this.password.value
    };
  }

  onCancel() {
    this.registrationForm.reset();
  }
}
