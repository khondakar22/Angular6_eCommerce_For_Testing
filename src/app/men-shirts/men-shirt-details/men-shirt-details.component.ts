import { Component, OnInit, Input } from '@angular/core';
import { MenShirts } from '../mensirts.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ParamsInheritanceStrategy } from '@angular/router/src/router_state';
import { Store } from '@ngrx/store';
import * as ShoppingListActions from '../../shopping-list/ngrx-store/shopping-list.action';
import * as fromApp from '../../ngrx-app-store/app.reducers';
import * as fromMenShirts from '../ngrx-store/men-shirts.reducers';
import * as MenShirtsAction from '../ngrx-store/men-shirts.actions';
import { Observable } from 'rxjs/Observable';
import { take } from 'rxjs/operators';
import { Subscriber } from 'rxjs/Subscriber';
@Component({
  selector: 'app-men-shirt-details',
  templateUrl: './men-shirt-details.component.html',
  styleUrls: ['./men-shirt-details.component.css']
})
export class MenShirtDetailsComponent implements OnInit {
  shirtsState: Observable<fromMenShirts.State>;
  id: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<fromMenShirts.FeatureState>
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.shirtsState = this.store.select('menShirts');
    });
  }
  onAddtoShoppingList() {
    this.store
      .select('menShirts')
      .pipe(take(1))
      .subscribe((shirtsState: fromMenShirts.State) => {
        this.store.dispatch(
          new ShoppingListActions.AddShirtCategories(
            shirtsState.menShirts[this.id].shirtcategories
          )
        );
      });
  }

  onEditShirts() {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }

  onDeleteShirts() {
    this.store.dispatch(new MenShirtsAction.DeleteMenShirts(this.id));
    this.router.navigate(['/menshirts']);
  }
}
