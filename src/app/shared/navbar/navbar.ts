import { Component, signal ,inject  } from '@angular/core';
import { CartService } from '../../core/services/cart';


@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
private cartService = inject(CartService);
  cartCount = signal(0);

  addToCart() {
    this.cartCount.update(count => count + 1);
     return this.cartService.getItemCount();
  }

 
 


}