import { Component, OnInit } from '@angular/core';
import { HeaderBarService } from '../_services/header-bar.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  title: string = "Clients";
  constructor(private headerBarService: HeaderBarService) {
    this.headerBarService.sendInfo(this.title);
  }

  ngOnInit(): void {}

}
