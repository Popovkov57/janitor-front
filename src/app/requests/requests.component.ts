import { Component, OnInit } from '@angular/core';
import { User } from '../_models/user';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.scss']
})
export class RequestsComponent implements OnInit {

  title: string = "Demandes";

  currentUser: User = {};

  constructor(private authRepository: AuthService) { }

  ngOnInit(): void {
    this.currentUser = this.authRepository.currentUser;
  }

}
