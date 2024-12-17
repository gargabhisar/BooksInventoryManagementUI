import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHouse, faBook, faCircleUser, faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, FontAwesomeModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  faHouse = faHouse;
  faBook = faBook;
  faCircleUser = faCircleUser;
  faPowerOff = faPowerOff;

  isActive: boolean = false;

  Name : string = 'Login User';
  Role : string = 'Role';
  
  constructor(private webapi: ApiService) {
    var loggedInUser = webapi.getLoginDetails();
    this.Name = loggedInUser.name;
    this.Role = loggedInUser.role;
  }

  clearalphabet()
  {
    this.webapi.clearalphabet();
  }

  logout()
  {
    sessionStorage.clear();
  }

  toggleSidebar() {
    this.isActive = !this.isActive;
  }
}
