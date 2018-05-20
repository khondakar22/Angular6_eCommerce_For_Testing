import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenShirtsComponent } from './men-shirts.component';
import { MenShirtsStartComponent } from './men-shirts-start/men-shirts-start.component';
import { MenShirtsEditComponent } from './men-shirts-edit/men-shirts-edit.component';
import { AuthGuard } from '../auth/auth-guard.service';
import { MenShirtDetailsComponent } from './men-shirt-details/men-shirt-details.component';
const menShirtsRoutes: Routes = [
  {
    path: '',
    component: MenShirtsComponent,
    children: [
      { path: '', component: MenShirtsStartComponent },
      {
        path: 'new',
        component: MenShirtsEditComponent,
        canActivate: [AuthGuard]
      },
      { path: ':id', component: MenShirtDetailsComponent },
      {
        path: ':id/edit',
        component: MenShirtsEditComponent,
        canActivate: [AuthGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(menShirtsRoutes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class MenShirtsRoutingModule {}
