import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-box',
  templateUrl: './text-box.component.html',
  styleUrls: ['./text-box.component.scss']
})
export class TextBoxComponent  implements OnInit {

  @Input() model: String = '';
  @Input() name: string = '';
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() required: boolean = false;

  constructor() {}

  ngOnInit(): void {

  }

}
