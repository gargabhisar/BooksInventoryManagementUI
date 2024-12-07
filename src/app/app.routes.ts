import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookSearchComponent } from './book-search/book-search.component';
import { BooksComponent } from './books/books.component';

export const routes: Routes = [
    { path: '', component: LoginComponent, pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    {
        path: '', component: HomeComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent },
            { path: 'booksearch', component: BookSearchComponent },
            { path: 'books', component: BooksComponent }
        ]
    }
];
