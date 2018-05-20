import { ShirtCategories } from '../shared/shirtcategories.model';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs/Subject';

export class ShoppingListService {
  // shirtsCategoriesChanged = new EventEmitter<ShirtCategories[]>();
  startedEditing = new Subject<number>();
  shirtsCategoriesChanged = new Subject<ShirtCategories[]>();
  private shirtcategories: ShirtCategories[] = [
    new ShirtCategories('Full Sleve', 5),
    new ShirtCategories('Half Seleve', 10)
  ];

  getShirtcategories() {
    return this.shirtcategories.slice();
  }

  getShirtCategory(index: number) {
    return this.shirtcategories[index];
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

  updateShirtCategory(index: number, newShirts: ShirtCategories) {
    this.shirtcategories[index] = newShirts;
    this.shirtsCategoriesChanged.next(this.shirtcategories.slice());
  }

  deleteShirts(index: number) {
    this.shirtcategories.splice(index, 1);
    this.shirtsCategoriesChanged.next(this.shirtcategories.slice());
  }
}
