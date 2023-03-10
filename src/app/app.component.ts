import { Component, OnInit } from '@angular/core';
import { AuthService } from './common/services/auth.service';
import { FirebaseService } from './common/services/firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'task-tracker2';

  constructor(private firebaseService: FirebaseService) {}

  ngOnInit() {}
}
