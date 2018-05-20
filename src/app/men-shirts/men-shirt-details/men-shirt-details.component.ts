import { Component, OnInit, Input } from '@angular/core';
import { MenShirts } from '../mensirts.model';
import { MenShirtsService } from '../men-shirts.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ParamsInheritanceStrategy } from '@angular/router/src/router_state';
import { Store } from '@ngrx/store';
// import { ShirtCategories } from '../../shared/shirtcategories.model';
import * as ShoppingListActions from '../../shopping-list/ngrx-store/shopping-list.action';
// import * as fromShoppingList from '../../shopping-list/ngrx-store/shopping-list.reducers';
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
  // @Input() shirts: MenShirts;
  // shirts: MenShirts;
  shirtsState: Observable<fromMenShirts.State>;
  id: number;
  //  To fecth the Id need Activated Route

  // constructor(
  //   private menShirtsService: MenShirtsService,
  //   private route: ActivatedRoute,
  //   private router: Router,
  //   private store: Store<{ shoppingList: { shirtcategories: ShirtCategories[] } }>
  // ) {}

  constructor(
    private menShirtsService: MenShirtsService,
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<fromMenShirts.FeatureState>
  ) {}

  ngOnInit() {
    // const id = this.route.snapshot.params['id'];
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      // this.shirts = this.menShirtsService.getMenShirt(this.id);
      this.shirtsState = this.store.select('menShirts');
    });
  }
  onAddtoShoppingList() {
    // this.menShirtsService.addShirtCategoriesToShoppingList(
    //   this.shirts.shirtcategories
    // );
    this.store.select('menShirts').pipe(take(1)).subscribe(
      (shirtsState: fromMenShirts.State) => {
        this.store.dispatch(new ShoppingListActions.AddShirtCategories(shirtsState.menShirts[this.id].shirtcategories));
      }
    );
  }

  onEditShirts() {
    this.router.navigate(['edit'], { relativeTo: this.route });
    // this.router.navigate(['../', this.id, 'edit'], { relativeTo: this.route });
  }

  onDeleteShirts() {
    // this.menShirtsService.deleteShirtsItem(this.id);
    this.store.dispatch(new MenShirtsAction.DeleteMenShirts(this.id));
    this.router.navigate(['/menshirts']);
  }
}
