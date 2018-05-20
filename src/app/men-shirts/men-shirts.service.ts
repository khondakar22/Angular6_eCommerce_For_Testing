import { MenShirts } from './mensirts.model';
// import { EventEmitter, Injectable } from '@angular/core';
import { ShirtCategories } from '../shared/shirtcategories.model';
// import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs/Subject';
// import { Store } from '@ngrx/store';
// import * as ShoppingListActions from '../shopping-list/ngrx-store/shopping-list.action';
// @Injectable()
export class MenShirtsService {
  // menShirtSelected = new EventEmitter<MenShirts>();
  shirtsItemChanged = new Subject<MenShirts[]>();
  private menShirts: MenShirts[] = [
    new MenShirts(
      'Ralph Lauren',
      'An iconic and preppy staple for more than 45 years, Polo Ralph Lauren presents the short sleeved black polo shirt.',
      'https://s1.thcdn.com/productimg/600/600/11095822-3154417653528081.jpg',
      [new ShirtCategories('Black', 4), new ShirtCategories('Red', 7)]
    ),
    new MenShirts(
      'Custom-Slim-Fit Polo aus',
      'Das Polohemd von Ralph Lauren steht bereits seit 1972 für typisch amerikanischen Stil',
      'http://www.ralphlauren.de/graphics/product_images/pPOLO2-7770055_alternate1_v400.jpg',
      [new ShirtCategories('White', 10), new ShirtCategories('Blue', 8)]
    )
  ];

  // constructor(private slService: ShoppingListService, private store: Store<{ shoppingList: { shirtcategories: ShirtCategories[] } }>) {}
  constructor() {}

  setShirts(mShirts: MenShirts[]) {
    this.menShirts = mShirts;
    this.shirtsItemChanged.next(this.menShirts.slice());
  }
  getMenShirts() {
    return this.menShirts.slice();
  }
  // addShirtCategoriesToShoppingList(shirtcategories: ShirtCategories[]) {
  //   // this.slService.addShirtscategories(shirtcategories);
  //   this.store.dispatch(new ShoppingListActions.AddShirtCategories(shirtcategories));

  // }
  // getMenShirt(index: number) {
  //   return this.menShirts[index];
  // }
  // addShirtsItem(shirts: MenShirts) {
  //   this.menShirts.push(shirts);
  //   this.shirtsItemChanged.next(this.menShirts.slice());
  // }
  // updateShirtsItem(index: number, newShirts: MenShirts) {
  //   this.menShirts[index] = newShirts;
  //   this.shirtsItemChanged.next(this.menShirts.slice());
  // }
  // deleteShirtsItem(index: number) {
  //   this.menShirts.splice(index, 1);
  //   this.shirtsItemChanged.next(this.menShirts.slice());
  // }
}
