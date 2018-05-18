import * as ShoppingListActions from './shopping-list.action';

import { ShirtCategories } from '../../shared/shirtcategories.model';


export interface State {
  shirtcategories: ShirtCategories[];
  editedShirtCategory: ShirtCategories;
  editedShirtCategoryIndex: number;
}

const initalState: State = {
  shirtcategories: [
    new ShirtCategories('Full Sleve', 5),
    new ShirtCategories('Half Seleve', 10)
  ],
  editedShirtCategory: null,
  editedShirtCategoryIndex: -1
};
export function shoppingListReducer(
  state = initalState,
  action: ShoppingListActions.ShoppingListActions
) {
  switch (action.type) {
    case ShoppingListActions.ADD_SHIRTCATEGORY:
      return {
        ...state,
        shirtcategories: [...state.shirtcategories, action.payload]
      };
    case ShoppingListActions.ADD_SHIRTCATEGORIES:
      return {
        ...state,
        shirtcategories: [...state.shirtcategories, ...action.payload]
      };
    case ShoppingListActions.UPDATE_SHIRTCATEGORY:
      // const shirtCategory = state.shirtcategories[action.payload.index];
      const shirtCategory =
        state.shirtcategories[state.editedShirtCategoryIndex];
      const updatedShirtCategory = {
        ...shirtCategory,
        ...action.payload.shirtCategory
      };
      const shirtcategories = [...state.shirtcategories];
      // shirtcategories[action.payload.index] = updatedShirtCategory;
      shirtcategories[state.editedShirtCategoryIndex] = updatedShirtCategory;
      return {
        ...state,
        shirtcategories: shirtcategories,
        editedShirtCategory: null,
        editedShirtCategoryIndex: -1
      };
    case ShoppingListActions.DELETE_SHIRTCATEGORY:
      const oldShirtcategories = [...state.shirtcategories];
      // oldShirtcategories.splice(action.payload, 1);
      oldShirtcategories.splice(state.editedShirtCategoryIndex, 1);
      return {
        ...state,
        shirtcategories: oldShirtcategories,
        editedShirtCategory: null,
        editedShirtCategoryIndex: -1
      };
    case ShoppingListActions.START_EDIT:
      const editedShirtCategory = { ...state.shirtcategories[action.payload] };
      return {
        ...state,
        editedShirtCategory: editedShirtCategory,
        editedShirtCategoryIndex: action.payload
      };
    case ShoppingListActions.STOP_EDIT:
      return {
        ...state,
        editedShirtCategory: null,
        editedShirtCategoryIndex: -1
      };
    default:
      return state;
  }
}
