import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
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

  get isLoggedIn(): boolean {
    let accessToken = localStorage.getItem('accessToken');
    return accessToken != null ? true : false;  
  }

  logout() {
    let accessToken = localStorage.removeItem('accessToken');
    if (accessToken == null) {
      this.router.navigate(['login']);
    }
  }
}
