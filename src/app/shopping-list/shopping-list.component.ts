import { Component, OnInit } from '@angular/core';
import { ShirtCategories } from '../shared/shirtcategories.model';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  shirtcategories: ShirtCategories[] = [
    new ShirtCategories('Full Sleve', 5),
    new ShirtCategories('Half Seleve', 10),
  ];
  constructor() { }

  ngOnInit() {
  }

  onShirtsAdded(shirts: ShirtCategories) {
    this.shirtcategories.push(shirts);
  }

}
