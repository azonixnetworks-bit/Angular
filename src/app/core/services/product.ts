
import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[] = [
    {
      id: '1',
      name: 'iPhone 17',
      price: 999,
      image: 'https://images.unsplash.com/photo-1592286927505-2fd2c7b5e3f3',
      category: 'Smartphones',
      description: 'Premium smartphone with powerful performance and modern design.'
    },
    {
      id: '2',
      name: 'Wireless Headphones',
      price: 199,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e',
      category: 'Audio',
      description: 'High-quality wireless headphones with immersive sound.'
    },
    {
      id: '3',
      name: 'Smart Watch',
      price: 299,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30',
      category: 'Wearables',
      description: 'Modern smart watch with fitness and everyday smart features.'
    }
  ];

  getProducts(): Product[] {
    return this.products;
  }

  getProductById(id: string): Product | undefined {
    return this.products.find(product => product.id === id);
  }
}

