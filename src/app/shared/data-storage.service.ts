import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { MenShirtsService } from '../men-shirts/men-shirts.service';
import { MenShirts } from '../men-shirts/mensirts.model';
import { map } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class DataStorageService {
  constructor(
    private http: Http,
    private menShirtsService: MenShirtsService,
    private authService: AuthService
  ) {}

  storeShirts() {
    const token = this.authService.getToken();
    return this.http.put(
      'https://ng-ecommerce-angular6.firebaseio.com/menShirts.json?auth='  + token ,
      this.menShirtsService.getMenShirts()
    );
  }
  getShirts() {

      const token = this.authService.getToken();
    this.http
      .get('https://ng-ecommerce-angular6.firebaseio.com/menShirts.json?auth=' + token)
      .pipe(
        map((response: Response) => {
          const shirts: MenShirts[] = response.json();
          for (const shirt of shirts) {
            if (!shirt['shirtcategories']) {
              shirt['shirtcategories'] = [];
            }
          }
          return shirts;
        })
      )
      .subscribe((shirts: MenShirts[]) => {
        this.menShirtsService.setShirts(shirts);
      });
  }
}
