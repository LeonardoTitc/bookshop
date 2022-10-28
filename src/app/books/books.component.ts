import { Component, OnInit } from '@angular/core';
import { Books } from '../models/Books';
import { BooksService } from './books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {


  books: Books[] = []

  constructor(private bookService: BooksService) {

  }



  ngOnInit(): void {
    this.books = this.bookService.getBooks()
  }
}
