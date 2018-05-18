import { Component, OnInit } from '@angular/core';
import { ShirtCategories } from '../shared/shirtcategories.model';
import { ShoppingListService } from './shopping-list.service';
// import { Subscription } from 'rxjs/Subscription';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
// import * as fromShoppingList from './ngrx-store/shopping-list.reducers';
import * as ShoppingListActions from './ngrx-store/shopping-list.action';
import * as fromApp from '../ngrx-app-store/app.reducers';
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
  // shirtcategories: ShirtCategories[];
  shoppingListState: Observable<{ shirtcategories: ShirtCategories[] }>;
  // private subscription: Subscription;

  // constructor(
  //   private slService: ShoppingListService,
  //   private store: Store<{ shoppingList: { shirtcategories: ShirtCategories[] } }>
  // ) {}

  constructor(
    private slService: ShoppingListService,
    private store: Store<fromApp.Appstate>
  ) {}

  ngOnInit() {
    // this.shirtcategories = this.slService.getShirtcategories();
    this.shoppingListState = this.store.select('shoppingList');
    // this.subscription = this.slService.shirtsCategoriesChanged.subscribe(
    //   (shirtscategories: ShirtCategories[]) => {
    //     this.shirtcategories = shirtscategories;
    //   }
    // );
  }
  onEditItem(index: number) {
    // this.slService.startedEditing.next(index);
    this.store.dispatch(new ShoppingListActions.StartEdit(index));
  }

  // ngOnDestroy() {
  //   this.subscription.unsubscribe();
  // }

  // onShirtsAdded(shirts: ShirtCategories) {
  //   this.shirtcategories.push(shirts);
  // }
}
