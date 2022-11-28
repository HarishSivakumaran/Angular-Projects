import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient.component';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  aIngredientList: Ingredient[] = [
    new Ingredient("Apple", 10),
    new Ingredient("Oranges", 7)
  ];

}
