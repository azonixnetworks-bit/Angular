
import { Routes } from '@angular/router';
import { ProductList } from './features/products/product-list/product-list';
import { CartPage } from './features/cart/cart-page/cart-page';
import { ProductDetails } from './features/products/product-details/product-details';

export const routes: Routes = [
  {
    path: '',
    component: ProductList,
  },
  {
    path: 'products/:id',
    component: ProductDetails,
  },
  {
    path: 'cart',
    component: CartPage,
  },
];