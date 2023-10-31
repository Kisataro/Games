import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  username: string | null = null;

  constructor(private authService: AuthService) {
    this.authService.username$.subscribe(username => {
      this.username = username;
    });
  }

  ngOnInit(): void {
    this.authService.username$.subscribe(username => {
      this.username = username;
    });
  }

}
