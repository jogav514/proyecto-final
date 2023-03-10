import { Injectable } from '@angular/core';
import { User } from './model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: null | User = null;
  isLoggedIn: boolean = false;

  constructor() {
    const userString = localStorage.getItem('user');
    this.user = userString ? JSON.parse(userString) : null;
  }

  isUserLoggedIn() {
    return this.user ? true : false;
  }

  login(user:User){
    localStorage.setItem('user',JSON.stringify(this.user)); 
    this.user = user;
  }

  logout() {
    localStorage.removeItem('user');
    this.user = null;
  }
}
