import { Component } from '@angular/core';
import { Product } from '../../../core/models/product';
import { ProductCard } from '../product-card/product-card';

@Component({
  selector: 'app-product-list',
  imports: [ProductCard],
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss',
})
export class ProductList {

  products: Product[] = [
    {
      id: '1',
      name: 'iPhone 17',
      price: 999,
      image: 'https://images.unsplash.com/photo-1592286927505-2fd2c7b5e3f3',
      category: 'Smartphones',
      description: ''
    },
    {
      id: '2',
      name: 'Wireless Headphones',
      price: 199,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e',
      category: 'Audio',
      description: ''
    },
    {
      id: '3',
      name: 'Smart Watch',
      price: 299,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30',
      category: 'Wearables',
      description: ''
    }
  ];

}