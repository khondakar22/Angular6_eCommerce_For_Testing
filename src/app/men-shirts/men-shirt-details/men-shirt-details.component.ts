import { Component, OnInit, Input } from '@angular/core';
import { MenShirts } from '../mensirts.model';
import { MenShirtsService } from '../men-shirts.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ParamsInheritanceStrategy } from '@angular/router/src/router_state';

@Component({
  selector: 'app-men-shirt-details',
  templateUrl: './men-shirt-details.component.html',
  styleUrls: ['./men-shirt-details.component.css']
})
export class MenShirtDetailsComponent implements OnInit {
  // @Input() shirts: MenShirts;
  shirts: MenShirts;
  id: number;
  //  To fecth the Id need Activated Route

  constructor(
    private menShirtsService: MenShirtsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    // const id = this.route.snapshot.params['id'];
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.shirts = this.menShirtsService.getMenShirt(this.id);
    });
  }
  onAddtoShoppingList() {
    this.menShirtsService.addShirtCategoriesToShoppingList(
      this.shirts.shirtcategories
    );
  }

  onEditShirts() {
    this.router.navigate(['edit'], { relativeTo: this.route });
    // this.router.navigate(['../', this.id, 'edit'], { relativeTo: this.route });
  }

  onDeleteShirts() {
    this.menShirtsService.deleteShirtsItem(this.id);
    this.router.navigate(['/menshirts']);
  }
}
