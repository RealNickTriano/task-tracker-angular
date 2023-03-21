import { Component, OnInit } from '@angular/core';
import { AuthService } from './common/services/auth.service';
import { FirebaseService } from './common/services/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'task-tracker2';

  constructor(private firebaseService: FirebaseService,
              private router: Router) {}

  ngOnInit() {
    let user = localStorage.getItem('user');
    if (user) {
      this.firebaseService.user = JSON.parse(user);
      this.firebaseService.isLoggedIn = true;
    }
  }
}
