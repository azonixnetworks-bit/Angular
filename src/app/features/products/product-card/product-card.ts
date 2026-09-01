
import { Component, inject, input } from '@angular/core';
import { Router } from '@angular/router';

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
  private router = inject(Router);

  addToCart(): void {
    this.cartService.addToCart(this.product());
  }

  viewDetails(): void {
    this.router.navigate(['/products', this.product().id]);
  }
}

