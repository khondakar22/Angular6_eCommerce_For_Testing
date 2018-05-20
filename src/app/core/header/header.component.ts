import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Store } from '@ngrx/store';
import * as fromApp from '../../ngrx-app-store/app.reducers';
import * as fromAuth from '../../auth/ngrx-store/auth.reducers';
import * as fromMenShirts from '../../men-shirts/ngrx-store/men-shirts.reducers';
import { Observable } from 'rxjs/Observable';
import * as AuthActions from '../../auth/ngrx-store/auth.actions';
import * as MenShirtsAction from '../../men-shirts/ngrx-store/men-shirts.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  authState: Observable<fromAuth.State>;
  constructor(
    private authService: AuthService,
    private store: Store<fromMenShirts.FeatureState>
  ) {}
  ngOnInit() {
    this.authState = this.store.select('auth');
  }

  onSaveData() {
    this.store.dispatch(new MenShirtsAction.StoreMenShirts());
  }
  onFetchData() {
    this.store.dispatch(new MenShirtsAction.FetchMenShirts());
  }
  onLogout() {
    this.store.dispatch(new AuthActions.Logout());
  }
}
