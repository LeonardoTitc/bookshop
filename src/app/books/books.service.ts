import { Injectable } from '@angular/core';

@Injectable()
export class BooksService {

  constructor() { }

  getBooks() {
    return [
      {
        name: "Harry Potter and the Sorcerer's Stone",
        author: 'J.K Rowling',
        img: "https://m.media-amazon.com/images/P/059035342X.01._SCLZZZZZZZ_SX500_.jpg",
        ammount: 6.98
      },{
        name: "Harry Potter and the Chamber of Secrets",
        author: 'J.K Rowling',
        img: "https://m.media-amazon.com/images/P/0439064872.01._SCLZZZZZZZ_SX500_.jpg",
        ammount: 6.98
      },{
        name: "Harry Potter and the Order of the Phoenix",
        author: 'J.K Rowling',
        img: "https://m.media-amazon.com/images/I/51b7R-IiOTL._SX338_BO1,204,203,200_.jpg",
        ammount: 6.90
      },{
        name: "Harry Potter and the Deathly Hallows",
        author: 'J.K Rowling',
        img: "https://m.media-amazon.com/images/I/51E7NvVLO9L._SX346_BO1,204,203,200_.jpg",
        ammount: 17.61
      }
    ]
  }
}
