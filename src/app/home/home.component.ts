import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../service/user.service';
import { ImageService } from '../service/image.service';
import { Image } from '../models/image';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: `
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" routerLink="/">DEMO SPA</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
             <p style="padding-right: 10px;">{{user?.email}}</p>
            </li>
            <li class="nav-item">
             <button (click)="signOut()">sign out</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <section>
      <div class="card" style="width: 18rem;">
        <img [src]="imageUrl" class="card-img-top" alt="...">
        <div class="card-body">
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <button (click)="nextImage()" class="btn btn-primary">Next</button>
        </div>
      </div>
    </section>
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  user: User | null = null;

  imageUrl?: string

  constructor(private userService: UserService, private imageService: ImageService, private router: Router) {

  }
  ngOnInit(): void {
    this.userService.getUser().subscribe(user => {
      this.user = user
    })

    this.imageService.getImage().subscribe((response: any) => {
      this.imageUrl = response.message;
      console.log(this.imageUrl)
    })

  }

  nextImage() {
    this.imageService.getImage().subscribe((response: any) => {
      this.imageUrl = response.message;
      console.log(this.imageUrl)
    })
  }

  signOut() {
    this.userService.logout();
  }
}
