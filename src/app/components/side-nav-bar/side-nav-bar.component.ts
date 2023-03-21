import { Component, Input, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/common/services/firebase.service';

@Component({
  selector: 'app-side-nav-bar',
  templateUrl: './side-nav-bar.component.html',
  styleUrls: ['./side-nav-bar.component.scss']
})
export class SideNavBarComponent implements OnInit {

  links = [
    { path: '/app/projects', icon: 'folder', title: 'Projects' },
    { path: '/app/discussion', icon: 'chat_bubble', title: 'Discussion' },
    { path: '/app/account', icon: 'person', title: 'Account' },
  ];
  
  constructor(private firebaseService: FirebaseService) {}

  ngOnInit(): void {}

  logout() {
    this.firebaseService.logout();
  }

}
