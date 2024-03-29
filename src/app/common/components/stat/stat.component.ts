import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stat',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.scss']
})
export class StatComponent implements OnInit {

  @Input() title: string = "";
  @Input() content: string | number = 0;

  constructor() {}

  ngOnInit(): void {
  }

}
