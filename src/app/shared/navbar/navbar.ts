
import { Component, inject } from '@angular/core';
import { CartService } from '../../core/services/cart';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {

  private cartService = inject(CartService);

  get cartCount(): number {
    return this.cartService.getItemCount();
  }
}
