import { Injectable, signal } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItems = signal<Product[]>([]);

  readonly items = this.cartItems.asReadonly();

  addToCart(product: Product): void {
    this.cartItems.update(items => [...items, product]);
  }

  removeFromCart(productId: string): void {
    this.cartItems.update(items =>
      items.filter(item => item.id !== productId)
    );
  }

  clearCart(): void {
    this.cartItems.set([]);
  }

  getItemCount(): number {
    return this.cartItems().length;
  }

  getTotal(): number {
    return this.cartItems().reduce(
      (total, item) => total + item.price,
      0
    );
  }
}