import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token = 'dslkfjdklsjfhilksdejflksdjlkfkfdjflf';
  private isLoggedInSubj = new BehaviorSubject<boolean>(false);
  get isLoggedIn() {
    return this.isLoggedInSubj.value;
  };
  isLoggedIn$ = this.isLoggedInSubj.asObservable();
  constructor() { }

  logIn() {
    this.isLoggedInSubj.next(true);
  }

  logOut() {
    this.isLoggedInSubj.next(false);
  }
}
