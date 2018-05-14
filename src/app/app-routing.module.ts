import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenShirtsComponent } from './men-shirts/men-shirts.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { MenShirtsStartComponent } from './men-shirts/men-shirts-start/men-shirts-start.component';
import { MenShirtDetailsComponent } from './men-shirts/men-shirt-details/men-shirt-details.component';
import { MenShirtsEditComponent } from './men-shirts/men-shirts-edit/men-shirts-edit.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthGuard } from './auth/auth-guard.service';

const appRoutes: Routes = [
  { path: '', redirectTo: '/menshirts', pathMatch: 'full' },
  {
    path: 'menshirts',
    component: MenShirtsComponent,
    children: [
      { path: '', component: MenShirtsStartComponent },
      { path: 'new', component: MenShirtsEditComponent, canActivate: [AuthGuard] },
      { path: ':id', component: MenShirtDetailsComponent },
      { path: ':id/edit', component: MenShirtsEditComponent, canActivate: [AuthGuard] }
    ]
  },
  { path: 'shopping-list', component: ShoppingListComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class ApproutingModule {}
