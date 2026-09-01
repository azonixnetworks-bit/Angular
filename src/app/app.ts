import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './shared/navbar/navbar';
import { ProductList } from './features/products/product-list/product-list';




@Component({
  imports: [RouterOutlet, Navbar, ProductList],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
 
})
export class App {
  protected readonly title = signal('shopverse - Xtreme Shopping Experience');
}
