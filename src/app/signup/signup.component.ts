import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { User } from '../_models/user';
import { AuthService } from '../_services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { AvatarGenerator } from 'random-avatar-generator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  user: User = {};

  signupForm = new FormGroup({
    userName: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    email: new FormControl('', [Validators.required, Validators.maxLength(50), Validators.email]),
    password: new FormControl('', [Validators.required, Validators.maxLength(120), Validators.minLength(6)]),
    passwordConfirmation: new FormControl('', [Validators.required, Validators.maxLength(120)]),
  }, { validators: [MatchValidator.validate] });

  constructor(private router: Router, private authRepository: AuthService, private toastr: ToastrService) { }

  ngOnInit(): void {}

  onSubmit() {
    this.user.username = this.userName?.value ? this.userName.value : '';
    this.user.email = this.email?.value ? this.email.value : '';
    this.user.password = this.password?.value ? this.password.value : '';

    this.authRepository.signup(this.user).subscribe(res => {
      this.signupForm.reset();
      this.toastr.success(res.message, 'Succès');
      this.router.navigate(['login']);
    }, err => {
      this.toastr.error(err.error.message ? err.error.message : '', 'Erreur');
    });
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
