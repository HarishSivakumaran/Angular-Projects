import { Ingredient } from './../shared/ingredient.component';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class ShoppingListService {
  private aIngList: Ingredient[] = [
    new Ingredient('Apple', 10),
    new Ingredient('Oranges', 7),
  ];

  addIngredient: EventEmitter<Ingredient> = new EventEmitter<Ingredient>();

  getIngredients() {
    return this.aIngList.slice();
  }

  addIngredientToList(oIngredient: Ingredient) {
    this.aIngList.push(oIngredient);
  }
}
