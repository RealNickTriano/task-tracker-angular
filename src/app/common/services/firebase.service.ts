import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';

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
        console.log(this.user);
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

  async signInWithGoogle() {
    var provider = new firebase.auth.GoogleAuthProvider();
    this.firebaseAuth.signInWithPopup(provider)
      .then(result => {
        this.user = result.user;
        console.log(this.user);
        this.isLoggedIn = true;
        let credential = result.credential;
        localStorage.setItem('user', JSON.stringify(this.user));
        this.router.navigate(['/projects']);
      }).catch(error => {
        let email = error.email;

        let credential = error.credential;
        // If account exists with different auth service
        if (error.code === 
            'auth/account-exists-with-different-credential') {
              this.firebaseAuth.fetchSignInMethodsForEmail(email)
          .then(providers => {
            /* // The returned 'providers' is a list of the available providers
            // linked to the email address. Please refer to the guide for a more
            // complete explanation on how to recover from this error. */
          });
        }
      });
    }

  logout() {
    this.firebaseAuth.signOut();
    this.isLoggedIn = false;
    this.user = null;
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }
}
