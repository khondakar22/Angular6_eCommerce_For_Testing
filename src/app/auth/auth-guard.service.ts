import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanLoad, Route } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import * as fromApp from '../ngrx-app-store/app.reducers';
import { map } from 'rxjs/operators';
import * as fromAuth from './ngrx-store/auth.reducers';

@Injectable()
export class AuthGuard implements CanActivate {
    // constructor (private authService: AuthService) {}
    constructor (private store: Store<fromApp.Appstate>) {}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.store.select('auth').pipe(map((authState: fromAuth.State) => {
            return authState.authenticated;
        }));
    }
    // canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
    //     return this.authService.isAuthenticated();
    // }
}
