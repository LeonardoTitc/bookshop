import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Books } from '../../models/Books';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  @Input() book: Books = {} as Books;


  isInCart: boolean = false

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  addToCart() {
    this.isInCart = true
    this.cartService.add(this.book)
  }

  removeFromCart() {
    this.isInCart = false
    this.cartService.remove(this.book)
  }



}
