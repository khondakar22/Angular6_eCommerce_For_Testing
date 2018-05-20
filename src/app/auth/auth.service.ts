import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from '../ngrx-app-store/app.reducers';
import * as AuthActions from '../auth/ngrx-store/auth.actions';

// Are not usign this service more

@Injectable()
export class AuthService {
    // token: string;

    constructor(private router: Router, private store: Store<fromApp.Appstate>) {

    }
    signupUser (email: string, password: string) {
        firebase.auth().createUserWithEmailAndPassword(email, password).then(
            (
                user => {
                    this.store.dispatch(new AuthActions.Signup());
                    firebase.auth().currentUser.getIdToken().then(
                        (token: string) => {
                            this.store.dispatch(new AuthActions.SetToken(token));
                        });
                }
            )
        ).catch(
            error => console.log(error)
        );
    }

    signinUser (email: string, password: string) {
        firebase.auth().signInWithEmailAndPassword(email, password).then(
            response => {
                this.store.dispatch(new AuthActions.Signin());
                this.router.navigate(['/']);
                firebase.auth().currentUser.getIdToken().then(
                    (token: string) => {
                        this.store.dispatch(new AuthActions.SetToken(token));
                    });
            }
        ).catch(
            error => console.log(error)
        );
    }

    // getToken () {
    //     // const UserInof = firebase.auth().currentUser.uid;
    //     // return UserInof;
    //      firebase.auth().currentUser.getIdToken().then(
    //         (token: string) => this.token = token);
    //         return this.token;
    // }

    // isAuthenticated() {
    //     return this.token != null;
    // }

    logout() {
        firebase.auth().signOut();
        // this.token = null;
    }
}
