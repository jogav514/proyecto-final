import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

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
