import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  isLoggedIn = false;
  user: any;
  errorMessage$ = new BehaviorSubject('');

  constructor(private firebaseAuth: AngularFireAuth,
              private router: Router) {}

  async signIn(email: string, password: string) {
    await this.firebaseAuth
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        this.isLoggedIn = true;
        this.user = res.user;
        this.clearError();
        localStorage.setItem('user', JSON.stringify(this.user));
        this.router.navigate(['/projects']);
      }).catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode === 'auth/wrong-password') {
          this.errorMessage$.next('Wrong password');
        } else if (errorCode === 'auth/user-not-found') {
          // prompt user to sign up?
          this.errorMessage$.next('Email not found');
        } else if (error.code === 
                    'auth/account-exists-with-different-credential') {
            this.firebaseAuth.fetchSignInMethodsForEmail(email)
              .then(providers => {
                this.handleUserExistsError(providers[0]);
            });
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
        this.clearError();
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
            this.handleUserExistsError(providers[0]);
          });
        }
      });
    }

  async signInWithGithub() {
    var provider = new firebase.auth.GithubAuthProvider();
      this.firebaseAuth.signInWithPopup(provider)
      .then(result => {
        this.user = result.user;
        console.log(this.user);
        this.isLoggedIn = true;
        let credential = result.credential;
        this.clearError();
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
            this.handleUserExistsError(providers[0]);
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

  handleUserExistsError(prov: string) {
    if (prov === 'google.com') {
      prov = 'Google';
    } else if (prov === 'github.com') {
      prov = 'Github';
    } else if (prov === 'password') {
      prov = 'Password'
    }
    this.errorMessage$.next("User already exists with " + prov);
  }

  clearError() {
    this.errorMessage$.next('');
  }
}
