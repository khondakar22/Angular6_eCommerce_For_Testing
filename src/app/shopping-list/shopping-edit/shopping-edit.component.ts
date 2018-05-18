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
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { Store } from '@ngrx/store';
import * as ShoppingListActions from '../ngrx-store/shopping-list.action';
// import * as fromShoppingList from '../ngrx-store/shopping-list.reducers';
import * as fromApp from '../../ngrx-app-store/app.reducers';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') slForm: NgForm;
  // @ViewChild('nameInput') nameInputRef: ElementRef;
  // @ViewChild('amountInput') amountInputRef: ElementRef;
  // @Output() shirtsAdded = new EventEmitter<ShirtCategories>();
  subscription: Subscription;
  editMode = false;
  // editedItemIndex: number;
  editeItem: ShirtCategories;

  // constructor(private slService: ShoppingListService,
  //   private store: Store<{ shoppingList: { shirtcategories: ShirtCategories[] } }>) {}

  constructor(private slService: ShoppingListService,
    private store: Store<fromApp.Appstate>) {}

  ngOnInit() {
    this.subscription = this.store.select('shoppingList').subscribe(
      data => {
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
      }
    );
    // this.subscription = this.slService.startedEditing.subscribe(
    //   (index: number) => {
    //     this.editedItemIndex = index;
    //     this.editMode = true;
    //     this.editeItem = this.slService.getShirtCategory(index);
    //     this.slForm.setValue({
    //       name: this.editeItem.name,
    //       amount: this.editeItem.amount
    //     });
    //   }
    // );
  }

  onSubmit(form: NgForm) {
    // const shirtsName = this.nameInputRef.nativeElement.value;
    // const shirtsAmount = this.amountInputRef.nativeElement.value;
    const value = form.value;
    const newShirtCategory = new ShirtCategories(value.name, value.amount);
    // this.shirtsAdded.emit(newShirtCategory);
    if (this.editMode) {
      // this.slService.updateShirtCategory(this.editedItemIndex, newShirtCategory);
      this.store.dispatch(new ShoppingListActions.UpdateShirtCategory({shirtCategory: newShirtCategory}));
    } else {
      // this.slService.addShirtCategories(newShirtCategory);
      this.store.dispatch(new ShoppingListActions.AddShirtCategoy(newShirtCategory));
    }
    this.editMode = false;
    form.reset();
  }

  onClear() {
    this.slForm.reset();
    this.editMode = false;
  }
  onDelete() {
    // this.slService.deleteShirts(this.editedItemIndex);
    this.store.dispatch(new ShoppingListActions.DeleteShirtCategory());
    this.onClear();
  }

  ngOnDestroy() {
    this.store.dispatch(new ShoppingListActions.StopEdit());
    this.subscription.unsubscribe();
  }
}
