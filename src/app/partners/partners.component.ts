import { Component, OnInit } from '@angular/core';
import { User } from '../_models/user';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})
export class PartnersComponent implements OnInit {

  title: string = "Partenaires";

  currentUser: User = {};

  constructor(private authRepository: AuthService) { }

  ngOnInit(): void {
    this.currentUser = this.authRepository.currentUser;
  }
}
