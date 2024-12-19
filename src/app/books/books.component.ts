import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../services/api.service';
import { Book } from '../Models/Book';
import { Router } from '@angular/router';
import { IsbnFormatPipe } from "../Pipes/isbn-format.pipe";

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [CommonModule, IsbnFormatPipe],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent {

  outOfStock : string = 'Out of Stock';
  books: Array<Book> = [];
  alphabets: string[] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ*'.split('');
  selectedLetter!: string; // Default selected letter is 'A'

  constructor(private webapi: ApiService, private router: Router) {
    this.selectedLetter = this.webapi.getalphabet();
    if (typeof this.selectedLetter != 'undefined' && this.selectedLetter) {
      this.selectLetter(this.selectedLetter);
    }
  }

  data = [
    { 
      name: 'John Doe', 
      email: 'john.doe@example.com', 
      phone: '123-456-7890', 
      image: 'https://via.placeholder.com/50' 
    },
    { 
      name: 'Jane Smith', 
      email: 'jane.smith@example.com', 
      phone: '987-654-3210', 
      image: 'https://via.placeholder.com/50' 
    },
    { 
      name: 'Alice Johnson', 
      email: 'alice.johnson@example.com', 
      phone: '555-123-4567', 
      image: 'https://via.placeholder.com/50' 
    }
  ];

  selectLetter(letter: string): void {
    this.selectedLetter = letter;

    if (letter != 'Out of Stock') {
      // Fetch books by the selected letter
      this.webapi.getBooksByAlphabet(this.selectedLetter).subscribe({
        next: (data: any) => {
          if (data?.result?.length) {
            this.books = data.result.sort((a: Book, b: Book) =>
              a.title.localeCompare(b.title, undefined, { sensitivity: "base" })
            );
          } else {
            this.books = [];
          }
        },
        error: (err) => {
          console.error("Failed to fetch books:", err);
        }
      });
    }
    else {
      this.webapi.getOutOfStockBooks().subscribe({
        next: (data: any) => {
          if (data?.result?.length) {
            this.books = data.result.sort((a: Book, b: Book) =>
              a.title.localeCompare(b.title, undefined, { sensitivity: "base" })
            );
          } else {
            this.books = [];
          }
        },
        error: (err) => {
          console.error("Failed to fetch books:", err);
        }
      });
    }

    // Update alphabet in the API
    this.webapi.setalphabet(letter);
  }

  updateBook(book: Book) {
    this.webapi.setData(book);
    this.router.navigate(['/bookupdate'], { skipLocationChange: true });
  }
}
