import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../_models/user';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  public user: User = {};

  constructor(
    private http: HttpClient,
    private router: Router
    ) { }
  
  signup(newUser: User): Observable<any> {
    return this.http.post<User>('/api/auth/signup', newUser);
  }

  signin(user: User): Observable<any> {
    return this.http.post('/api/auth/signin', user)
  }

  getToken() {
    return localStorage.getItem('accessToken');
  }

  setAccessToken(accessToken: string) {
    localStorage.setItem('accessToken', accessToken);
  }

  setCurrentUser(user: User) {
    localStorage.setItem('username', user.username || "");
    localStorage.setItem('email', user.email || "");
  }

  get currentUser(): User {
    this.user.username = localStorage.getItem('username') || "";
    this.user.email = localStorage.getItem('email') || "";
    return this.user;
  }

  get isLoggedIn(): boolean {
    return localStorage.getItem('accessToken') != null ? true : false;  
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['login']);
  }
}
