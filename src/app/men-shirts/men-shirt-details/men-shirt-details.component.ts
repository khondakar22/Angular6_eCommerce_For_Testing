import { Component, OnInit, Input } from '@angular/core';
import { MenShirts } from '../mensirts.model';

@Component({
  selector: 'app-men-shirt-details',
  templateUrl: './men-shirt-details.component.html',
  styleUrls: ['./men-shirt-details.component.css']
})
export class MenShirtDetailsComponent implements OnInit {
  @Input() shirts: MenShirts;
  constructor() { }

  ngOnInit() {
  }

}
