import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HeaderBarService } from '../_services/header-bar.service';
import { User } from '../_models/user';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.scss']
})
export class HeaderBarComponent implements OnInit, OnDestroy {

  title: string = "";
  currentUser: User;
  subscription: Subscription;

  constructor(private headerBarService: HeaderBarService, private authService: AuthService) {
    this.subscription = this.headerBarService.onInfo().subscribe(res => {
      this.title = res.title;
    });
    this.currentUser = this.authService.currentUser;
  }

  ngOnInit(): void {
    
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
