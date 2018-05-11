import { Component, OnInit } from '@angular/core';
import { ShirtCategories } from '../shared/shirtcategories.model';
import { ShoppingListService } from './shopping-list.service';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  // shirtcategories: ShirtCategories[] = [
  //   new ShirtCategories('Full Sleve', 5),
  //   new ShirtCategories('Half Seleve', 10),
  // ];
  shirtcategories: ShirtCategories[];

  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    this.shirtcategories = this.slService.getShirtcategories();
    this.slService.shirtsCategoriesChanged.subscribe(
      (shirtscategories: ShirtCategories[]) => {
        this.shirtcategories = shirtscategories;
      }
    );
  }

  // onShirtsAdded(shirts: ShirtCategories) {
  //   this.shirtcategories.push(shirts);
  // }

}
