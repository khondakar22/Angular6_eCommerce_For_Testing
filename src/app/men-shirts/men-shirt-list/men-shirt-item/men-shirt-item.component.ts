import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { MenShirts } from '../../mensirts.model';
import { MenShirtsService } from '../../men-shirts.service';
@Component({
  selector: 'app-men-shirt-item',
  templateUrl: './men-shirt-item.component.html',
  styleUrls: ['./men-shirt-item.component.css']
})
export class MenShirtItemComponent implements OnInit {
  @Input() shirts: MenShirts;
  // @Output() shirtsSelected = new EventEmitter<void>();

  constructor( private menShirtSrv: MenShirtsService) { }

  ngOnInit() {
  }

  onSelected() {
    // this.shirtsSelected.emit();
    this.menShirtSrv.menShirtSelected.emit(this.shirts);
  }

}
