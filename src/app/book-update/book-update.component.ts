import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Book } from '../Models/Book';
import { ApiService } from '../services/api.service';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-book-update',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './book-update.component.html',
  styleUrl: './book-update.component.css'
})
export class BookUpdateComponent {
  book!: Book;
  isDisabled = false;

  constructor(private router: Router, private webapi: ApiService) { }

  ngOnInit(): void {
    this.book = this.webapi.getData();
  }

  updateBook(book: Book) {
    // Logic to save the updated book details to the server
    let updateBookStatus = this.webapi.updateBooksCount(book);
    updateBookStatus.subscribe((data: any) => {
      if (data.statusCode == 400) {
        Swal.fire({
          title: data.validation[0].title,
          text: data.validation[0].details,
          icon: 'error',
          confirmButtonText: 'Ok'
        });
      }
      else {
        this.isDisabled = true;
      }
    })
  }
}
