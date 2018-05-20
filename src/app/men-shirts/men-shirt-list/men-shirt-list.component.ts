import { Component, OnInit } from '@angular/core';
import { MenShirts } from '../mensirts.model';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromMenShirts from '../ngrx-store/men-shirts.reducers';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-men-shirt-list',
  templateUrl: './men-shirt-list.component.html',
  styleUrls: ['./men-shirt-list.component.css']
})
export class MenShirtListComponent implements OnInit {
  menShirtsState: Observable<fromMenShirts.State>;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<fromMenShirts.FeatureState>
  ) {}

  ngOnInit() {
    this.menShirtsState = this.store.select('menShirts');
  }

  onNewShirt() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
}
