import { Component } from '@angular/core';
import { AuthService } from './common/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'task-tracker2';

  constructor(private authService: AuthService) {
    this.authService.changeEmitted$.subscribe(result => {
      console.log(result);
    });
  }
}
