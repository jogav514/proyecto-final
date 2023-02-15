import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit{
  isUserLoggedIn: boolean = false;
  constructor(private authService: AuthService) { }


  ngOnInit(): void {
    this.isUserLoggedIn = this.authService.isUserLoggedIn();
  }

  logout() {
    this.authService.logout();
    this.isUserLoggedIn = false;
  }
}
