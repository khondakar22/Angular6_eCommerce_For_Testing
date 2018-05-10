import { Component, OnInit } from '@angular/core';
import { MenShirts } from './mensirts.model';

@Component({
  selector: 'app-men-shirts',
  templateUrl: './men-shirts.component.html',
  styleUrls: ['./men-shirts.component.css']
})
export class MenShirtsComponent implements OnInit {
 selectedShirt: MenShirts;
  constructor() { }

  ngOnInit() {
  }

}
