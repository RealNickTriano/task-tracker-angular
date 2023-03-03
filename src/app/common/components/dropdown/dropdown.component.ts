import { Component, EventEmitter, Input, OnInit, Output, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  providers:[
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DropdownComponent),
      multi: true,
    },
  ]
})
export class DropdownComponent implements OnInit, ControlValueAccessor {

  showChoices: boolean = false;
  @Input() list: string[] = [];
  @Input() value: String = '';
  @Input() title: string = 'Title';
  @Input() width: string = "180px";

  @Output() onSelect = new EventEmitter();

  constructor() {}

  ngOnInit(): void {

  }
  
  setShowChoices() {
    this.showChoices = !this.showChoices;
  }

  setSelected(choice: string) {
    this.value = choice;
    this.onChange(this.value);
    this.setShowChoices();
    this.onSelect.emit(this.value);
  }

  writeValue(value: string): void {
    this.value = value;
  }

  onChange: any = () => {}
  onTouch: any = () => {}

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
}
