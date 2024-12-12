import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../services/api.service';
import { Book } from '../Models/Book';
import { Router } from '@angular/router';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent {

  books!: Array<Book>;
  alphabets: string[] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ*'.split('');
  selectedLetter: string = 'A'; // Default selected letter is 'A'

  constructor(private webapi: ApiService, private router: Router) {
    let getMyBooksCall = this.webapi.getBooksByAlphabet("A");
    getMyBooksCall.subscribe((data: any) => {
      this.books = data.result;
    })
  }

  selectLetter(letter: string): void {
    this.selectedLetter = letter;
    let getMyBooksCall = this.webapi.getBooksByAlphabet(this.selectedLetter);
    getMyBooksCall.subscribe((data: any) => {
      this.books = data.result || [];
    })
  }

  updateBook(book: Book) {
    this.webapi.setData(book);
    this.router.navigate(['/bookupdate'], { skipLocationChange: true });
  }
}
