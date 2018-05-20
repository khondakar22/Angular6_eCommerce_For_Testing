import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { MenShirts } from '../../mensirts.model';
@Component({
  selector: 'app-men-shirt-item',
  templateUrl: './men-shirt-item.component.html',
  styleUrls: ['./men-shirt-item.component.css']
})
export class MenShirtItemComponent implements OnInit {
  @Input() shirts: MenShirts;
  @Input() index: number;

  ngOnInit() {
  }

}
