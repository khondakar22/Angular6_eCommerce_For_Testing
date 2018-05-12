import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShirtCategories } from '../shared/shirtcategories.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs/Subscription';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  // shirtcategories: ShirtCategories[] = [
  //   new ShirtCategories('Full Sleve', 5),
  //   new ShirtCategories('Half Seleve', 10),
  // ];
  shirtcategories: ShirtCategories[];
  private subscription: Subscription;

  constructor(private slService: ShoppingListService) {}

  ngOnInit() {
    this.shirtcategories = this.slService.getShirtcategories();
    this.subscription = this.slService.shirtsCategoriesChanged.subscribe(
      (shirtscategories: ShirtCategories[]) => {
        this.shirtcategories = shirtscategories;
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  // onShirtsAdded(shirts: ShirtCategories) {
  //   this.shirtcategories.push(shirts);
  // }
}
