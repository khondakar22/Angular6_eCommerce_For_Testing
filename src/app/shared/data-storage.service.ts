import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { MenShirtsService } from '../men-shirts/men-shirts.service';
import { MenShirts } from '../men-shirts/mensirts.model';
import { map } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';

@Injectable()
export class DataStorageService {
  constructor(
    private httpClient: HttpClient,
    private menShirtsService: MenShirtsService,
    private authService: AuthService
  ) {}

  storeShirts() {
    const token = this.authService.getToken();
    // const header =  new HttpHeaders().set('Authorization', 'Bearer afdklasfladf');
    // return this.httpClient.put(
    //   'https://ng-ecommerce-angular6.firebaseio.com/menShirts.json',
    //   this.menShirtsService.getMenShirts(), {
    //     observe: 'body',
    //     params: new HttpParams().set('auth', token)
    //     // headers: header
    //   }
    // );
    // This would be help for upload and download
    const req = new HttpRequest('PUT', 'https://ng-ecommerce-angular6.firebaseio.com/menShirts.json',
    this.menShirtsService.getMenShirts(), {reportProgress: true, params: new HttpParams().set('auth', token) });
    return this.httpClient.request(req);
  }
  getShirts() {

      const token = this.authService.getToken();
    this.httpClient
      // .get<MenShirts[]>('https://ng-ecommerce-angular6.firebaseio.com/menShirts.json?auth=' + token)
      .get<MenShirts[]>('https://ng-ecommerce-angular6.firebaseio.com/menShirts.json', {
        observe: 'body',
        responseType: 'json',
        params: new HttpParams().set('auth', token)
      })
      .pipe(
        map((menShirts) => {
          console.log(menShirts);
          for (const shirt of menShirts) {
            if (!shirt['shirtcategories']) {
              shirt['shirtcategories'] = [];
            }
          }
          return menShirts;
          // return [];
        })
      )
      .subscribe((shirts: MenShirts[]) => {
        this.menShirtsService.setShirts(shirts);
      });
  }
}
