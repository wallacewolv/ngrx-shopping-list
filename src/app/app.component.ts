import { Component } from '@angular/core';

export type IngredientsType = {
  name: string;
  amount: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  ingredients: Array<IngredientsType> = [
    { name: 'Apples', amount: 5 },
    { name: 'Tomatoes', amount: 10 }
  ];
}
