import { Action } from '@ngrx/store';
import { MenShirts } from '../mensirts.model';

export const SET_MENSHIRTS = 'SET_MENSHIRTS';
export const ADD_MENSHIRTS = 'ADD_MENSHIRTS';
export const UPDATE_MENSHIRTS = 'UPDATE_MENSHIRTS';
export const DELETE_MENSHIRTS = 'DELETE_MENSHIRTS';
export const STORE_MENSHIRTS = 'STORE_MENSHIRTS ';
export const FETCH_MENSHIRTS = 'FETCH_MENSHIRTS';

export class SetMenShirts implements Action {
  readonly type = SET_MENSHIRTS;
  constructor(public payload: MenShirts[]) {}
}

export class AddMenShirts implements Action {
  readonly type = ADD_MENSHIRTS;
  constructor(public payload: MenShirts) {}
}

export class UpdateMenShirts implements Action {
  readonly type = UPDATE_MENSHIRTS;
  constructor(public payload: { index: number; updatedMenShirts: MenShirts }) {}
}

export class DeleteMenShirts implements Action {
  readonly type = DELETE_MENSHIRTS;
  constructor(public payload: number) {}
}

export class StoreMenShirts implements Action {
  readonly type = STORE_MENSHIRTS;
}

export class FetchMenShirts implements Action {
  readonly type = FETCH_MENSHIRTS;
}

export type MenShirtsAction =
  | SetMenShirts
  | AddMenShirts
  | UpdateMenShirts
  | DeleteMenShirts
  | StoreMenShirts
  | FetchMenShirts;
