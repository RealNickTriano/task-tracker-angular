import { Component, EventEmitter, Input, OnInit, Output, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-dropdown-filter',
  templateUrl: './dropdown-filter.component.html',
  styleUrls: ['./dropdown-filter.component.scss'],
  providers:[
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DropdownFilterComponent),
      multi: true,
    },
  ]
})
export class DropdownFilterComponent implements OnInit, ControlValueAccessor {

  showChoices: boolean = false;
  @Input() list: string[] = [];
  @Input() value: string = '';
  @Input() title: string = 'Title';
  @Input() width: string = "180px";

  @Output() onSelect = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    this.onSelect.emit(this.value);
  }
  
  setShowChoices() {
    this.showChoices = !this.showChoices;
  }

  setSelected(choice: string) {
    this.value = choice;
    //this.onChange(this.value);
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
