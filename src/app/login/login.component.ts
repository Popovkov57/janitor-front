import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../_services/auth.service';
import { User } from '../_models/user';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: User = {};

  loginForm = new FormGroup({
    userName: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    password: new FormControl('', [Validators.required, Validators.maxLength(120)]),
  });

  constructor(private authRepository: AuthService, private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {}

  onSubmit() {
    this.user.username = this.userName?.value ? this.userName.value : '';
    this.user.password = this.password?.value ? this.password.value : '';

    this.authRepository.signin(this.user).subscribe(res => {
      this.loginForm.reset();
      this.authRepository.setCurrentUser(res);
      this.authRepository.setAccessToken(res.accessToken);
      this.toastr.success('Autentification réussie', 'Succès');
      this.router.navigate(['home/dashboard']);
    }, err => {
      this.toastr.error(err.error.message, 'Erreur');
    })
  }

  get userName() {
    return this.loginForm.get('userName');
  }

  get password() {
    return this.loginForm.get('password');
  }

}
