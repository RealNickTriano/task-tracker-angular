import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AuthService } from 'src/app/common/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string = '';
  password: string = '';

  constructor(private authService: AuthService) {}

  ngOnInit(): void {

  }

  signIn() {
    this.authService.emitChange("Signing in");
  }

  signInWithGoogle() {
    this.authService.emitChange("Signing in With Google");
  }

  signInWithGithub() {
    this.authService.emitChange("Signing in With Github");
  }

}
