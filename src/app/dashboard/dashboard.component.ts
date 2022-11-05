import { Component, OnInit } from '@angular/core';
import { HeaderBarService } from '../_services/header-bar.service';
import { User } from '../_models/user';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  title: string = "Dashboard";

  constructor(private headerBarService: HeaderBarService) {
    this.headerBarService.sendInfo(this.title);
  }

  ngOnInit(): void {}

}
