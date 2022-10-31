import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm = new FormGroup({
    userName: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    email: new FormControl('', [Validators.required, Validators.maxLength(50), Validators.email]),
    password: new FormControl('', [Validators.required, Validators.maxLength(120)]),
    passwordConfirmation: new FormControl('', [Validators.required, Validators.maxLength(120)]),
  }, { validators: [MatchValidator.validate] });

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.signupForm);
  }

  get userName() {
    return this.signupForm.get('userName');
  }

  get email() {
    return this.signupForm.get('email');
  }

  get password() {
    return this.signupForm.get('password');
  }

  get passwordConfirmation() {
    return this.signupForm.get('passwordConfirmation');
  }

}

export class MatchValidator {
  static validate(group: AbstractControl): ValidationErrors | null { 
    const password = group.get('password')?.value;
    const passwordConfirmation = group.get('passwordConfirmation')?.value;

    return password === passwordConfirmation ? null : { notMatching: true }
  };
}
