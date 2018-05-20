import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  EventEmitter,
  Output,
  OnDestroy
} from '@angular/core';
import { ShirtCategories } from '../../shared/shirtcategories.model';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { Store } from '@ngrx/store';
import * as ShoppingListActions from '../ngrx-store/shopping-list.action';
import * as fromApp from '../../ngrx-app-store/app.reducers';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') slForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editeItem: ShirtCategories;
  constructor(private store: Store<fromApp.Appstate>) {}

  ngOnInit() {
    this.subscription = this.store.select('shoppingList').subscribe(data => {
      if (data.editedShirtCategoryIndex > -1) {
        this.editeItem = data.editedShirtCategory;
        this.editMode = true;
        this.slForm.setValue({
          name: this.editeItem.name,
          amount: this.editeItem.amount
        });
      } else {
        this.editMode = false;
      }
    });
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newShirtCategory = new ShirtCategories(value.name, value.amount);
    if (this.editMode) {
      this.store.dispatch(
        new ShoppingListActions.UpdateShirtCategory({
          shirtCategory: newShirtCategory
        })
      );
    } else {
      this.store.dispatch(
        new ShoppingListActions.AddShirtCategoy(newShirtCategory)
      );
    }
    this.editMode = false;
    form.reset();
  }

  onClear() {
    this.slForm.reset();
    this.editMode = false;
  }
  onDelete() {
    this.store.dispatch(new ShoppingListActions.DeleteShirtCategory());
    this.onClear();
  }

  ngOnDestroy() {
    this.store.dispatch(new ShoppingListActions.StopEdit());
    this.subscription.unsubscribe();
  }
}
