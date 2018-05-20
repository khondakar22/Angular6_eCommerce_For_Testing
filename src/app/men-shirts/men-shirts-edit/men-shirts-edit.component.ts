import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { MenShirts } from '../mensirts.model';
import { Subscription } from 'rxjs/Subscription';
import * as MenShirtsActions from '../ngrx-store/men-shirts.actions';
import * as fromMenShirts from '../ngrx-store/men-shirts.reducers';
import { Store } from '@ngrx/store';
import { take } from 'rxjs/operators';
@Component({
  selector: 'app-men-shirts-edit',
  templateUrl: './men-shirts-edit.component.html',
  styleUrls: ['./men-shirts-edit.component.css']
})
export class MenShirtsEditComponent implements OnInit, OnDestroy {
  id: number;
  editMode = false;
  menShirtsForm: FormGroup;
  subscription: Subscription;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<fromMenShirts.FeatureState>
  ) {}

  ngOnInit() {
    this.subscription = this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      console.log(this.editMode);
      this.initForm();
    });
  }
  onSubmit() {
    const newShirtsItem = new MenShirts(
      this.menShirtsForm.value['name'],
      this.menShirtsForm.value['description'],
      this.menShirtsForm.value['imagePath'],
      this.menShirtsForm.value['shirtCategires']
    );
    console.log(this.menShirtsForm);
    if (this.editMode) {
      this.store.dispatch(
        new MenShirtsActions.UpdateMenShirts({
          index: this.id,
          updatedMenShirts: newShirtsItem
        })
      );
    } else {
      this.store.dispatch(new MenShirtsActions.AddMenShirts(newShirtsItem));
    }
    this.onCancle();
  }
  // above was the Modeling way and the below is the reactive way
  // onSubmit() {
  //   if (this.editMode) {
  //     // this.menShirtService.updateShirtsItem(this.id, this.menShirtsForm.value);
  //     this.store.dispatch(new MenShirtsActions.UpdateMenShirts({index: this.id, updatedMenShirts: this.menShirtsForm.value}));
  //   } else {
  //     // this.menShirtService.addShirtsItem(this.menShirtsForm.value);
  //     this.store.dispatch(new MenShirtsActions.AddMenShirts(this.menShirtsForm.value));
  //   }
  //   this.onCancle();
  // }
  onCancle() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }
  onAddShirtsItem() {
    (<FormArray>this.menShirtsForm.get('shirtCategires')).push(
      new FormGroup({
        name: new FormControl(null, Validators.required),
        amount: new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/)
        ])
      })
    );
  }

  onDeleteShirtsCategories(index: number) {
    (<FormArray>this.menShirtsForm.get('shirtCategires')).removeAt(index);
  }
  getControls() {
    return (<FormArray>this.menShirtsForm.get('shirtCategires')).controls;
  }
  private initForm() {
    let shirtsName = '';
    let shirtsImagePath = '';
    let shirtsDescription = '';
    const menShirtsCategories = new FormArray([]);
    if (this.editMode) {
      this.store
        .select('menShirts')
        .pipe(take(1))
        .subscribe((shirtState: fromMenShirts.State) => {
          const shirts = shirtState.menShirts[this.id];
          shirtsName = shirts.name;
          shirtsImagePath = shirts.imagePath;
          shirtsDescription = shirts.description;
          if (shirts['shirtcategories']) {
            for (const shirtCategory of shirts.shirtcategories) {
              menShirtsCategories.push(
                new FormGroup({
                  name: new FormControl(
                    shirtCategory.name,
                    Validators.required
                  ),
                  amount: new FormControl(shirtCategory.amount, [
                    Validators.required,
                    Validators.pattern(/^[1-9]+[0-9]*$/)
                  ])
                })
              );
            }
          }
        });
    }
    this.menShirtsForm = new FormGroup({
      name: new FormControl(shirtsName, Validators.required),
      imagePath: new FormControl(shirtsImagePath, Validators.required),
      description: new FormControl(shirtsDescription, Validators.required),
      shirtCategires: menShirtsCategories
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
