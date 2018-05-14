import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenShirtsComponent } from './men-shirts/men-shirts.component';
import { MenShirtDetailsComponent } from './men-shirts/men-shirt-details/men-shirt-details.component';
import { MenShirtListComponent } from './men-shirts/men-shirt-list/men-shirt-list.component';
import { MenShirtItemComponent } from './men-shirts/men-shirt-list/men-shirt-item/men-shirt-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { ApproutingModule } from './app-routing.module';
import { MenShirtsStartComponent } from './men-shirts/men-shirts-start/men-shirts-start.component';
import { MenShirtsEditComponent } from './men-shirts/men-shirts-edit/men-shirts-edit.component';
import { MenShirtsService } from './men-shirts/men-shirts.service';
import { DataStorageService } from './shared/data-storage.service';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth-guard.service';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenShirtsComponent,
    MenShirtDetailsComponent,
    MenShirtListComponent,
    MenShirtItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective,
    MenShirtsStartComponent,
    MenShirtsEditComponent,
    SignupComponent,
    SigninComponent
  ],
  imports: [  BrowserModule,
              ApproutingModule,
              FormsModule,
              HttpModule,
              ReactiveFormsModule],
  providers: [ShoppingListService,
              MenShirtsService,
              DataStorageService,
              AuthService,
              AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
