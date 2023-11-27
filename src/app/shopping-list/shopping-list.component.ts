import { Component, Input } from '@angular/core';
import { IngredientsType } from '../app.component';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent {
  @Input() ingredients?: Array<IngredientsType>;
}
