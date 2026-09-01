import { Component, inject, input } from '@angular/core';
import { Product } from '../../../core/models/product';
import { CartService } from '../../../core/services/cart';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss',
})
export class ProductCard {

  product = input.required<Product>();

  private cartService = inject(CartService);

  addToCart(): void {
    this.cartService.addToCart(this.product());
  }
}