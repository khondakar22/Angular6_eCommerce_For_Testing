import { Component, EventEmitter, Output } from '@angular/core';
import { DataStorageService } from '../../shared/data-storage.service';
import { HttpEvent, HttpEventType } from '@angular/common/http';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {
  // @Output() featureSelected = new EventEmitter<string>();
  // onSelect(feature: string) {
  //   this.featureSelected.emit(feature);
  // }
  constructor(private dataStorageService: DataStorageService,
              private authService: AuthService) {}

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

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }

}
