import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  isLoggedIn = false;
  user: any;

  constructor(private firebaseAuth: AngularFireAuth,
              private router: Router) {}

  async signIn(email: string, password: string) {
    await this.firebaseAuth
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        this.isLoggedIn = true;
        this.user = res.user;
        this.router.navigate(['/projects']);
      }).catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode === 'auth/wrong-password') {
          alert('Wrong password.');
        } else if (errorCode === 'auth/user-not-found') {
          // prompt user to sign up?
          alert('Email not found');
        } else {
          alert(errorMessage);
        }
        console.log(error);
      });
  }

  async signUp(email: string, password: string) {
    await this.firebaseAuth
      .createUserWithEmailAndPassword(email, password)
      .then(res => {
        this.isLoggedIn = true;
        this.user = res.user;
      });
  }

  logout() {
    this.firebaseAuth.signOut();
    this.isLoggedIn = false;
    this.user = null;
  }
}
