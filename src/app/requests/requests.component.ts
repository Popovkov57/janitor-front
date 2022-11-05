import { Component, OnInit } from '@angular/core';
import { HeaderBarService } from '../_services/header-bar.service';
import { User } from '../_models/user';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.scss']
})
export class RequestsComponent implements OnInit {

  title: string = "Demandes";

  constructor(private headerBarService: HeaderBarService) {
    this.headerBarService.sendInfo(this.title);
  }

  ngOnInit(): void {}

}
