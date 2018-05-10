import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import { ShirtCategories } from '../../shared/shirtcategories.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  @Output() shirtsAdded = new EventEmitter<ShirtCategories>();

  constructor() { }

  ngOnInit() {
  }

  onAddItem() {
    const shirtsName = this.nameInputRef.nativeElement.value;
    const shirtsAmount =  this.amountInputRef.nativeElement.value;
    const newShirtCategory = new ShirtCategories(shirtsName, shirtsAmount);
    this.shirtsAdded.emit(newShirtCategory);
  }

}
