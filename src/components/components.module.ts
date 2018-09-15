import { NgModule } from '@angular/core';
import { ItemlistComponent } from './itemlist/itemlist';
import { CreateorderComponent } from './createorder/createorder';
import { OrdersgraphComponent } from './ordersgraph/ordersgraph';
@NgModule({
	declarations: [ItemlistComponent,
    CreateorderComponent,
    OrdersgraphComponent],
	imports: [],
	exports: [ItemlistComponent,
    CreateorderComponent,
    OrdersgraphComponent]
})
export class ComponentsModule {}
