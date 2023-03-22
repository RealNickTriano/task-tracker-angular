import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AuthService } from 'src/app/common/services/auth.service';
import { FirebaseService } from 'src/app/common/services/firebase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string = '';
  password: string = '';
  authErrorMessage: string = "";

  constructor(private firebaseService: FirebaseService) {}

  ngOnInit(): void {
    this.firebaseService.errorMessage$
      .subscribe((data) => {
        this.authErrorMessage = data;
      })
  }

  signIn() {
    this.firebaseService.signIn(this.email, this.password);
  }

  signInWithGoogle() {
    this.firebaseService.signInWithGoogle();
  }

  async signInWithGithub() {
    this.firebaseService.signInWithGithub()
  }

  signInAsDemo() {
    this.firebaseService.signIn("demouser@demo.com", "demoUser");
  }

}
