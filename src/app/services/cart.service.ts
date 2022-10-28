import { Injectable } from '@angular/core';
import { Books } from '../models/Books';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: Books[] = [];

  constructor() { }

  add(book: Books) {
    this.cart.push(book);
  }

  remove(book: Books) {
    this.cart = this.cart.filter((b) => b != book)
  }

  get() {
    return this.cart
  }
}
