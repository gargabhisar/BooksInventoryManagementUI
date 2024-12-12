import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSearch, faHouse, faBook } from '@fortawesome/free-solid-svg-icons';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, FontAwesomeModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  faSearch = faSearch;
  faHouse = faHouse;
  faBook = faBook;
  
  constructor(private webapi: ApiService) {
    
  }

  clearalphabet()
  {
    this.webapi.clearalphabet();
  }
}
