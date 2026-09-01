
import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../../core/models/product';
import { ProductService } from '../../../core/services/product';
import { CartService } from '../../../core/services/cart';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.html',
  styleUrl: './product-details.scss',
})
export class ProductDetails {

  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private productService = inject(ProductService);
  private cartService = inject(CartService);

  productId = this.route.snapshot.paramMap.get('id');

  product: Product | undefined;

  constructor() {
    if (this.productId) {
      this.product = this.productService.getProductById(this.productId);
    }
  }

  addToCart(): void {
    if (this.product) {
      this.cartService.addToCart(this.product);
    }
  }

  goBack(): void {
    this.router.navigate(['/']);
  }
}

