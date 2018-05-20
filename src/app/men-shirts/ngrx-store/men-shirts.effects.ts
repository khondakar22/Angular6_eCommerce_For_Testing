import { Effect, Actions } from '@ngrx/effects';
import * as MenShirtsAction from '../ngrx-store/men-shirts.actions';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { MenShirts } from '../mensirts.model';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromMenShirts from '../ngrx-store/men-shirts.reducers';

@Injectable()
export class MenShirtsEffects {

  @Effect()
  menShirtsFetch = this.action$.ofType(MenShirtsAction.FETCH_MENSHIRTS).
    pipe(switchMap((action: MenShirtsAction.FetchMenShirts) => {
      return this.httpClient.get<MenShirts[]>(
        'https://ng-ecommerce-angular6.firebaseio.com/menShirts.json',
        {
          observe: 'body',
          responseType: 'json'
          // params: new HttpParams().set('auth', token)
        }
      );
    }), map((menShirts) => {
        for (const shirt of menShirts) {
            if (!shirt['shirtcategories']) {
                shirt['shirtcategories'] = [];
              }
        }
        return {
            type: MenShirtsAction.SET_MENSHIRTS,
            payload: menShirts
        };
    }));

    @Effect({dispatch: false})
    menShirtsStore = this.action$.ofType(MenShirtsAction.STORE_MENSHIRTS).pipe(
      withLatestFrom(this.store.select('menShirts')),
      switchMap(([action, state]) => {
        const req = new HttpRequest('PUT', 'https://ng-ecommerce-angular6.firebaseio.com/menShirts.json',
    state.menShirts, {reportProgress: true});
    return this.httpClient.request(req);
      } )
    );
  constructor(private action$: Actions,
    private httpClient: HttpClient,
    private store: Store<fromMenShirts.FeatureState>) {}
}
