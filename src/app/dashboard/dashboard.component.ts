import { Component, OnInit } from '@angular/core';
import { User } from '../_models/user';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  title: string = "Dashboard";
  currentUser: User = {};

  constructor(private authRepository: AuthService) { }

  ngOnInit(): void {
    this.currentUser = this.authRepository.currentUser;
  }

}
