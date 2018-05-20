import { Component, OnInit } from '@angular/core';
import { ShirtCategories } from '../shared/shirtcategories.model';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as ShoppingListActions from './ngrx-store/shopping-list.action';
import * as fromApp from '../ngrx-app-store/app.reducers';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  shoppingListState: Observable<{ shirtcategories: ShirtCategories[] }>;

  constructor(private store: Store<fromApp.Appstate>) {}

  ngOnInit() {
    this.shoppingListState = this.store.select('shoppingList');
  }
  onEditItem(index: number) {
    this.store.dispatch(new ShoppingListActions.StartEdit(index));
  }
}
