import { ShirtCategories } from '../shared/shirtcategories.model';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs/Subject';

export class ShoppingListService {
  // shirtsCategoriesChanged = new EventEmitter<ShirtCategories[]>();

  shirtsCategoriesChanged = new Subject<ShirtCategories[]>();
  private shirtcategories: ShirtCategories[] = [
    new ShirtCategories('Full Sleve', 5),
    new ShirtCategories('Half Seleve', 10)
  ];

  getShirtcategories() {
    return this.shirtcategories.slice();
  }

  addShirtCategories(shirtCategories: ShirtCategories) {
    this.shirtcategories.push(shirtCategories);
    // this.shirtsCategoriesChanged.emit(this.shirtcategories.slice());
        this.shirtsCategoriesChanged.next(this.shirtcategories.slice());
  }
  addShirtscategories(shirtCategories: ShirtCategories[]) {
    // for (const shirtItem of shirtCategories) {
    //     this.addShirtCategories(shirtItem);
    // }
    this.shirtcategories.push(...shirtCategories);
    // this.shirtsCategoriesChanged.emit(this.shirtcategories.slice());
    this.shirtsCategoriesChanged.next(this.shirtcategories.slice());
  }
}
