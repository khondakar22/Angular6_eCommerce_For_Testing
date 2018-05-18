import * as fromShoppingList from '../shopping-list/ngrx-store/shopping-list.reducers';
import * as fromAuth from '../auth/ngrx-store/auth.reducers';
import { ActionReducerMap } from '@ngrx/store';

export interface Appstate {
    shoppingList: fromShoppingList.State;
    auth: fromAuth.State;
  }

  export const reducers: ActionReducerMap<Appstate> = {
    shoppingList: fromShoppingList.shoppingListReducer,
    auth: fromAuth.authReducer
  };
