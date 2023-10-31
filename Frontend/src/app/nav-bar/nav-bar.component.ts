import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  constructor(private authService: AuthService) {}

  loggedIn() {
    return localStorage.getItem('token') as string;
  }

  onLogout() {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    this.authService.setLoggedInUsername('');
  }

}
