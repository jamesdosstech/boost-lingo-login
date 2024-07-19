import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userSubject = new BehaviorSubject<User | null>(null)
  private readonly AUTH_KEY = 'isAuthenticated';
  user$ = this.userSubject.asObservable();
  
  login(user: User) {
    console.log(user, 'user service')
    localStorage.setItem(this.AUTH_KEY, 'true')
    this.userSubject.next(user);
    this.router.navigate(['/home'])
    
  }

  getUser(): Observable<User | null> {
    return this.user$
  }

  logout() {
    this.userSubject.next(null);
    localStorage.removeItem(this.AUTH_KEY);
    this.router.navigate(['/login']);
    
  }

  getLoginStatus() {
    return localStorage.getItem(this.AUTH_KEY) === 'true';
  }



  constructor(private router: Router) { }
}
