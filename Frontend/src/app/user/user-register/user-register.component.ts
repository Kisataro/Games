import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  constructor(private fb: FormBuilder, private userService: UserService) {}

  registrationForm!: FormGroup;
  usernamePlaceholder: string = "Max. 15 characters";
  passwordPlaceholder: string = "Min. 5 characters";
  emailPlaceholder: string = "example@gmail.com";

  user!: User;

  ngOnInit(): void {
    this.registrationForm = new FormGroup({
      username: new FormControl(null, [Validators.required, Validators.maxLength(15)]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(5)]),
      confirmPassword: new FormControl(null, [Validators.required])
    }, this.passwordMatchingValidator);
    // this.createRegistrationForm();
  }
  //same thing as above, but using formBuilder, replace the code in ngOnInit with the commented line

  // createRegistrationForm() {
  //   this.registrationForm = this.fb.group({
  //     username: [null, Validators.required, Validators.maxLength(15)],
  //     email: [null, Validators.required, Validators.email],
  //     password: [null, Validators.required, Validators.minLength(5)],
  //     confirmPassword: [null, Validators.required]
  //   }, {validators: this.passwordMatchingValidator});
  // }

  passwordMatchingValidator(fc: AbstractControl):ValidationErrors|null {
    return fc.get('password')?.value === fc.get('confirmPassword')?.value ? null :
    {notmatched: true};
  }

  get username() {
    return this.registrationForm.get('username') as FormControl;
  }

  get email() {
    return this.registrationForm.get('email') as FormControl;
  }

  get password() {
    return this.registrationForm.get('password') as FormControl;
  }

  get confirmPassword() {
    return this.registrationForm.get('confirmPassword') as FormControl;
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      this.userService.addUser(this.userData());
      this.registrationForm.reset();
    }
  }

  userData(): User {
    return this.user = {
      username: this.username.value,
      email: this.email.value,
      password: this.password.value
    };
  }

  onCancel() {
    this.registrationForm.reset();
  }
}
