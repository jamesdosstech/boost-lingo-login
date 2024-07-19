import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms'
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <nav class="navbar bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" routerLink="/" >DEMO SPA</a>
      </div>
    </nav>
    <section class="container">
      <p>Welcome to Demo SPA</p>
    </section>
    <section class="container">
      <form [formGroup]="loginForm" (ngSubmit)="onSubmit()">
        <div class="mb-3">
          <label class="form-label" for="email">Email</label>
          <input placeholder="email" class="form-control" formControlName="email" type="email" name="email" id="email">
          @if (loginForm.controls['email'].invalid && loginForm.controls['email'].touched) {
            <div>
              Invalid Email
            </div>
          }
        </div>
        <div class="mb-3">
          <label class="form-label" for="password">Password</label>
          <input type="password" class="form-control" formControlName="password" placeholder="password">
          @if(loginForm.controls['password'].invalid && loginForm.controls['password'].touched) {
            <div>
              Password is required
            </div>
          }
        </div>
        <button type="submit" [disabled]="loginForm.invalid">Submit</button>
      </form>
    </section>
  `,
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private userService: UserService) {
    this.loginForm = this.fb.group({
      email: ['' , [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }

  onSubmit() {
    if(this.loginForm.valid) {
      const userData = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password
      }
      this.userService.login(userData)
    };
    
  }

}
