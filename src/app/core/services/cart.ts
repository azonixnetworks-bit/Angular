
import { Injectable, signal } from '@angular/core';
import { Product } from '../models/product';

export interface CartItem {
  product: Product;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItems = signal<CartItem[]>([]);

  readonly items = this.cartItems.asReadonly();

  addToCart(product: Product): void {
    this.cartItems.update(items => {
      const existingItem = items.find(
        item => item.product.id === product.id
      );

      if (existingItem) {
        return items.map(item =>
          item.product.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1
              }
            : item
        );
      }

      return [
        ...items,
        {
          product,
          quantity: 1
        }
      ];
    });
  }

  increaseQuantity(productId: string): void {
    this.cartItems.update(items =>
      items.map(item =>
        item.product.id === productId
          ? {
              ...item,
              quantity: item.quantity + 1
            }
          : item
      )
    );
  }

  decreaseQuantity(productId: string): void {
    this.cartItems.update(items =>
      items
        .map(item =>
          item.product.id === productId
            ? {
                ...item,
                quantity: item.quantity - 1
              }
            : item
        )
        .filter(item => item.quantity > 0)
    );
  }

  removeFromCart(productId: string): void {
    this.cartItems.update(items =>
      items.filter(
        item => item.product.id !== productId
      )
    );
  }

  clearCart(): void {
    this.cartItems.set([]);
  }

  getItemCount(): number {
    return this.cartItems().reduce(
      (total, item) => total + item.quantity,
      0
    );
  }

  getTotal(): number {
    return this.cartItems().reduce(
      (total, item) =>
        total + item.product.price * item.quantity,
      0
    );
  }
}

