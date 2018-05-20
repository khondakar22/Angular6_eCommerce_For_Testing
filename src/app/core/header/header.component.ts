import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { DataStorageService } from '../../shared/data-storage.service';
import { HttpEvent, HttpEventType } from '@angular/common/http';
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
export class HeaderComponent implements OnInit  {
  // @Output() featureSelected = new EventEmitter<string>();
  // onSelect(feature: string) {
  //   this.featureSelected.emit(feature);
  // }
  authState: Observable<fromAuth.State>;
  constructor(private dataStorageService: DataStorageService,
              private authService: AuthService,
              private store: Store<fromMenShirts.FeatureState>) {}
ngOnInit() {
this.authState = this.store.select('auth');
}

  onSaveData() {
  // this.dataStorageService.storeShirts().subscribe(
  //   (response: HttpEvent<Object>) => {
  //     console.log(response);
  //   }
  // );
  this.store.dispatch(new MenShirtsAction.StoreMenShirts());
  }
  onFetchData() {
    //  this.dataStorageService.getShirts();
    this.store.dispatch(new MenShirtsAction.FetchMenShirts());

  }
  onLogout() {
    // this.authService.logout();
    this.store.dispatch(new AuthActions.Logout());
  }

  // isAuthenticated() {
  //   return this.authService.isAuthenticated();
  // }

}
