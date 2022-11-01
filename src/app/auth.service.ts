import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(
    private http: HttpClient
    ) { }
  
  signup(newUser: User): Observable<any> {
    return this.http.post<User>('/api/auth/signup', newUser);
  }

}
