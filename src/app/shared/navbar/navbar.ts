
import { Component, computed, inject, signal } from '@angular/core';
import {
  Router,
  RouterLink,
  RouterLinkActive
} from '@angular/router';

import { CartService } from '../../core/services/cart';

@Component({
  selector: 'app-navbar',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {

  private cartService = inject(CartService);
  private router = inject(Router);

  menuOpen = signal(false);

  readonly cartCount = computed(() =>
    this.cartService.items().reduce(
      (total, item) => total + item.quantity,
      0
    )
  );

  toggleMenu(): void {
    this.menuOpen.update(open => !open);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }

  goToCart(): void {
    this.closeMenu();
    this.router.navigate(['/cart']);
  }
}