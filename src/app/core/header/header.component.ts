import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { DataStorageService } from '../../shared/data-storage.service';
import { HttpEvent, HttpEventType } from '@angular/common/http';
import { AuthService } from '../../auth/auth.service';
import { Store } from '@ngrx/store';
import * as fromApp from '../../ngrx-app-store/app.reducers';
import * as fromAuth from '../../auth/ngrx-store/auth.reducers';
import { Observable } from 'rxjs/Observable';

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
              private store: Store<fromApp.Appstate>) {}
ngOnInit() {
this.authState = this.store.select('auth');
}

  onSaveData() {
  this.dataStorageService.storeShirts().subscribe(
    (response: HttpEvent<Object>) => {
      console.log(response);
    }
  );
  }
  onFetchData() {
    this.dataStorageService.getShirts();
  }
  onLogout() {
    this.authService.logout();
  }

  // isAuthenticated() {
  //   return this.authService.isAuthenticated();
  // }

}
