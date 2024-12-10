import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../Models/Book';

@Component({
  selector: 'app-book-update',
  standalone: true,
  imports: [],
  templateUrl: './book-update.component.html',
  styleUrl: './book-update.component.css'
})
export class BookUpdateComponent {
  book!: Book;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.book = history.state;
    console.log(this.book);
  }
}
