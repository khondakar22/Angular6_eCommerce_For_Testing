import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenShirtsComponent } from './men-shirts/men-shirts.component';
import { MenShirtDetailsComponent } from './men-shirts/men-shirt-details/men-shirt-details.component';
import { MenShirtListComponent } from './men-shirts/men-shirt-list/men-shirt-list.component';
import { MenShirtItemComponent } from './men-shirts/men-shirt-list/men-shirt-item/men-shirt-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { DropdownDirective } from './shared/dropdown.directive';


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
    DropdownDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
