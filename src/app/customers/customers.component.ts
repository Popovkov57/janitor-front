import { Component, OnInit } from '@angular/core';
import { User } from '../_models/user';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  title: string = "Clients";
  currentUser: User = {};

  constructor(private authRepository: AuthService) { }

  ngOnInit(): void {
    this.currentUser = this.authRepository.currentUser;
  }

}
