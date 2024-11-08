import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Enlace1Component } from './enlace1/enlace1.component';
import { Enlace2Component } from './enlace2/enlace2.component';
import { routes } from './app.routes';
import { Router } from '@angular/router';
import { BookManagementComponent } from './book-management/book-management.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule,HomeComponent,CommonModule,Enlace1Component,Enlace2Component, BookManagementComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tpi0';

  constructor(private router: Router){
    this.irAHome();
  }

  // redirigir a otra pantalla
  irAHome() {
    this.router.navigate(['/home']);
  }
  
}
