import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Store } from '@ngrx/store';
import * as fromApp from '../../ngrx-app-store/app.reducers';
import * as AuthAction from '../ngrx-store/auth.actions';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  // constructor(private authService: AuthService) { }
  constructor(private store: Store<fromApp.Appstate>) { }

  ngOnInit() {
  }

  onSignin(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    // this.authService.signinUser(email, password);
    this.store.dispatch(new AuthAction.TrySignin({username: email, password: password}));
  }

}
