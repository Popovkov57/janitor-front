import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderBarService {

  constructor() { }

  private subject = new Subject<any>();

  sendInfo(title: string) {
    this.subject.next({ title: title });
  }

  clearInfo() {
    this.subject.next({});
  }

  onInfo(): Observable<any> {
    return this.subject.asObservable();
  }

}
