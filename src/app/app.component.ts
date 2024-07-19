import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UserService } from './service/user.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HomeComponent,LoginComponent, DatePipe],
  template: `
    <router-outlet></router-outlet>
    <footer class="fixed-bottom">
      <nav class="navbar bg-body-tertiary">
        <div class="container-fluid">
          <p>{{currentDate | date:'fullDate'}}</p>
        </div>
      </nav>
    </footer>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'boost-lingo-login';
  showLogout = false;
  currentDate = new Date();
  constructor(private userService: UserService) {
  }
  ngOnInit(): void {
    if(this.userService.getUser()) {
      this.showLogout = true
    }
    this.showLogout = false
  }
}
