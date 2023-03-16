import { Component, Input, OnInit } from '@angular/core';

type Category = {
  name: string, 
  color: string
}

@Component({
  selector: 'app-category-selector',
  templateUrl: './category-selector.component.html',
  styleUrls: ['./category-selector.component.scss']
})
export class CategorySelectorComponent implements OnInit {

  category = {
      name: "",
      color: ""
    }

  catList: Category[] = [];

  @Input() set items(value: Category[]) {
    if(!value) return;
    this.catList = [...value];
    console.log(value);
  }

  constructor() {}

  ngOnInit(): void {

  }

  removeItem(item: { name: string; }) {
    let index = -1
    for (let i = 0; i < this.catList.length; i++) {
      if (this.catList[i].name === item.name) {
        index = i;
      }
    }
    if (index === -1) return;
    else this.catList.splice(index, 1);
    return;

  }

  addItem(item: {name: string; color: string;}) {
    if (item.name === '' || item.color === '') return;
    this.catList.push({...item});
    this.category.name = '';
    this.category.color = '';
  }

  

}
