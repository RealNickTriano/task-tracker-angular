import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss']
})
export class TextInputComponent  implements OnInit {

  @Input() model: String = '';
  @Input() name: string = '';
  @Input() label: string = '';
  @Input() placeholder: string = '';

  constructor() {}

  ngOnInit(): void {

  }

}
