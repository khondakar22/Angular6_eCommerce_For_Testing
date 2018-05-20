import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { MenShirts } from '../mensirts.model';
import { MenShirtsService } from '../men-shirts.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Store } from '@ngrx/store';
import * as fromMenShirts from '../ngrx-store/men-shirts.reducers';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-men-shirt-list',
  templateUrl: './men-shirt-list.component.html',
  styleUrls: ['./men-shirt-list.component.css']
})
export class MenShirtListComponent implements OnInit {
  // @Output() shirtsWasSelected = new EventEmitter<MenShirts>();
  //   menShirts: MenShirts[] = [
  //   new MenShirts('Ralph Lauren',
  //   'An iconic and preppy staple for more than 45 years, Polo Ralph Lauren presents the short sleeved black polo shirt.',
  //   'https://s1.thcdn.com/productimg/600/600/11095822-3154417653528081.jpg'),
  //   new MenShirts('Custom-Slim-Fit Polo aus',
  //   'Das Polohemd von Ralph Lauren steht bereits seit 1972 für typisch amerikanischen Stil',
  //   'http://www.ralphlauren.de/graphics/product_images/pPOLO2-7770055_alternate1_v400.jpg')
  // ];
  menShirtsState: Observable<fromMenShirts.State>;
  // subscription: Subscription;
  constructor(
    // private menShirtsSrvice: MenShirtsService,
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<fromMenShirts.FeatureState>
  ) {}

  ngOnInit() {
    // this.subscription = this.menShirtsSrvice.shirtsItemChanged.subscribe(
    //   (newShirts: MenShirts[]) => {
    //     this.menShirts = newShirts;
    //   }
    // );
    // this.menShirts = this.menShirtsSrvice.getMenShirts();
    this.menShirtsState = this.store.select('menShirts');
  }

  // onShirstSeleted(shirts: MenShirts) {
  //   this.shirtsWasSelected.emit(shirts);
  // }
  onNewShirt() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
  // ngOnDestroy() {
  //   this.subscription.unsubscribe();
  // }

}
