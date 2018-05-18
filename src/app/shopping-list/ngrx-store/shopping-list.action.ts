import { Action } from '@ngrx/store';
import { ShirtCategories } from '../../shared/shirtcategories.model';
export const ADD_SHIRTCATEGORY = 'ADD_SHIRTCATEGORY';
export const ADD_SHIRTCATEGORIES = 'ADD_SHIRTCATEGORIES';
export const UPDATE_SHIRTCATEGORY = 'UPDATE_SHIRTCATEGORY';
export const DELETE_SHIRTCATEGORY = 'DELETE_SHIRTCATEGORY';
export const START_EDIT = 'START_EDIT';
export const STOP_EDIT = 'STOP_EDIT';

export class AddShirtCategoy implements Action {
  readonly type = ADD_SHIRTCATEGORY;
  // payload: ShirtCategories;
  constructor(public payload: ShirtCategories) {}
}

export class AddShirtCategories implements Action {
  readonly type = ADD_SHIRTCATEGORIES;
  // payload: ShirtCategories;
  constructor(public payload: ShirtCategories[]) {}
}

export class UpdateShirtCategory implements Action {
  readonly type = UPDATE_SHIRTCATEGORY;
  // payload: ShirtCategories;
  // constructor(public payload: {index: number, shirtCategory: ShirtCategories}) {}
  constructor(public payload: { shirtCategory: ShirtCategories }) {}
}

export class DeleteShirtCategory implements Action {
  readonly type = DELETE_SHIRTCATEGORY;
  // payload: ShirtCategories;
  // constructor(public payload: number) {}
}

export class StartEdit implements Action {
  readonly type = START_EDIT;
  // payload: ShirtCategories;
  constructor(public payload: number) {}
}

export class StopEdit implements Action {
  readonly type = STOP_EDIT;
  // payload: ShirtCategories;
}

export type ShoppingListActions =
  | AddShirtCategoy
  | AddShirtCategories
  | UpdateShirtCategory
  | DeleteShirtCategory
  | StartEdit
  | StopEdit;
