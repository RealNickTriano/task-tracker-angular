import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav-bar',
  templateUrl: './side-nav-bar.component.html',
  styleUrls: ['./side-nav-bar.component.scss']
})
export class SideNavBarComponent implements OnInit{

  links = [
    { path: '/projects', icon: 'folder', title: 'Projects' },
    { path: '/discussion', icon: 'chat_bubble', title: 'Discussion' },
    { path: '/account', icon: 'person', title: 'Nicholas Triano' },
  ];

  constructor() {}

  ngOnInit(): void {

  }

}
