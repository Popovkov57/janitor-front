import { Component, OnInit } from '@angular/core';
import { HeaderBarService } from '../_services/header-bar.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  title: string = "Utilisateurs";

  constructor(private headerBarService: HeaderBarService) {
    this.headerBarService.sendInfo(this.title);
  }

  ngOnInit(): void {
  }

}
