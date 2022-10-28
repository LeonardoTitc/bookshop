import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Books } from '../models/Books';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  isInCart: boolean = false;


  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  getCart() {
    return this.cartService.get()
  }


}
