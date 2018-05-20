import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as fromApp from '../../ngrx-app-store/app.reducers';
import * as AuthAction from '../ngrx-store/auth.actions';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  constructor(private store: Store<fromApp.Appstate>) {}

  ngOnInit() {}
  onSignup(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.store.dispatch(
      new AuthAction.TrySignup({ username: email, password: password })
    );
  }
}
