import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { AvatarGenerator } from 'random-avatar-generator';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private authRepository: AuthService) {}

  ngOnInit(): void {}

  logout() {
    this.authRepository.logout();
  }

}
