import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MenShirtsComponent } from './men-shirts.component';
import { MenShirtsStartComponent } from './men-shirts-start/men-shirts-start.component';
import { MenShirtListComponent } from './men-shirt-list/men-shirt-list.component';
import { MenShirtsEditComponent } from './men-shirts-edit/men-shirts-edit.component';
import { MenShirtDetailsComponent } from './men-shirt-details/men-shirt-details.component';
import { MenShirtItemComponent } from './men-shirt-list/men-shirt-item/men-shirt-item.component';
import { MenShirtsRoutingModule } from './men-shirts-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        MenShirtsComponent,
        MenShirtsStartComponent,
        MenShirtListComponent,
        MenShirtsEditComponent,
        MenShirtDetailsComponent,
        MenShirtItemComponent,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MenShirtsRoutingModule,
        SharedModule
    ]
})
export class MenShirtsModule {

}
