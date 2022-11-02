import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private authRepository: AuthService) { }

  ngOnInit(): void {
  }

  logout() {
    this.authRepository.logout();
  }

}
