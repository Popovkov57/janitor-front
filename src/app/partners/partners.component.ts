import { Component, OnInit } from '@angular/core';
import { HeaderBarService } from '../_services/header-bar.service';
import { User } from '../_models/user';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})
export class PartnersComponent implements OnInit {

  title: string = "Partenaires";

  constructor(private headerBarService: HeaderBarService) {
    this.headerBarService.sendInfo(this.title);
  }

  ngOnInit(): void {}
}
