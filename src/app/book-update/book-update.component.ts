import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../Models/Book';
import { ApiService } from '../services/api.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-book-update',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './book-update.component.html',
  styleUrl: './book-update.component.css'
})
export class BookUpdateComponent {
  book!: Book;

  constructor(private router: Router, private webapi: ApiService) {}

  ngOnInit(): void {
    this.book = this.webapi.getData();
  }

  updateBook(book: any) {
    // Logic to save the updated book details to the server
  }
}
