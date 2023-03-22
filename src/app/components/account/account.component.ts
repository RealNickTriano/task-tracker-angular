import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/common/services/firebase.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})

export class AccountComponent implements OnInit {

  name: string = "";
  email: string = "";
  provider: string = "";
  photoUrl: string = "";
  verified: boolean = false;

  stats: {title: string, content: string | number}[] = [
    {title: 'Projects Created', content: 5},
    {title: 'Projects Started', content: 5},
    {title: 'Projects Completed', content: 3},
    {title: 'Tasks Created', content: 23},
    {title: 'Tasks Started', content: 20},
    {title: 'Tasks Completed', content: 18},
    {title: 'Average Tasks Per Project', content: 15},
    {title: 'Average Tasks Completion Time', content: '2 Days, 6 Hours'},
  ];

  constructor(private firebaseService: FirebaseService) {}

  ngOnInit(): void {
    if (this.firebaseService.user) {
      this.provider = this.firebaseService.user.providerData[0].providerId;
      this.name = this.firebaseService.user.displayName;
      this.email = this.firebaseService.user.email;
      this.photoUrl = this.firebaseService.user.photoURL;
      this.verified = this.firebaseService.user.emailVerified;
    }
  }
  

}
