import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {

  cartCount = signal(0);

  addToCart() {
    this.cartCount.update(count => count + 1);
  }

}