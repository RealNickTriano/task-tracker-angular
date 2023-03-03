import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  showChoices: boolean = false;
  @Input() list: string[] = [];
  @Input() selected: String = '';
  @Input() title: string = 'Title';
  @Input() width: string = "180px";

  @Output() onSelect = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    this.selected = this.list[0];
  }
  
  setShowChoices() {
    this.showChoices = !this.showChoices;
  }

  setSelected(choice: string) {
    this.selected = choice;
    this.setShowChoices();
    this.onSelect.emit(this.selected);
  }
}
