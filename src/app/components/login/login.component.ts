import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AuthService } from 'src/app/common/services/auth.service';
import { FirebaseService } from 'src/app/common/services/firebase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string = '';
  password: string = '';

  constructor(private firebaseService: FirebaseService) {}

  ngOnInit(): void {

  }

  signIn() {
    this.firebaseService.signIn(this.username, this.password);
  }

  signInWithGoogle() {
    this.firebaseService.signInWithGoogle();
  }

  signInWithGithub() {
    console.log("Signing in With Github");
  }

}
