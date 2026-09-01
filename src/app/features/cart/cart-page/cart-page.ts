
import { Component, computed, inject } from '@angular/core';
import { Router } from '@angular/router';

import { CartService } from '../../../core/services/cart';

@Component({
  selector: 'app-cart-page',
  imports: [],
  templateUrl: './cart-page.html',
  styleUrl: './cart-page.scss',
})
export class CartPage {

  private cartService = inject(CartService);
  private router = inject(Router);

  readonly cartItems = this.cartService.items;

  readonly itemCount = computed(() =>
    this.cartItems().reduce(
      (total, item) => total + item.quantity,
      0
    )
  );

  readonly total = computed(() =>
    this.cartItems().reduce(
      (total, item) =>
        total + item.product.price * item.quantity,
      0
    )
  );

  increaseQuantity(productId: string): void {
    this.cartService.increaseQuantity(productId);
  }

  decreaseQuantity(productId: string): void {
    this.cartService.decreaseQuantity(productId);
  }

  removeItem(productId: string): void {
    this.cartService.removeFromCart(productId);
  }

  clearCart(): void {
    this.cartService.clearCart();
  }

  goToProducts(): void {
    this.router.navigate(['/']);
  }
}

