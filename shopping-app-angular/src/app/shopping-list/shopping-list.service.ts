import { Ingredient } from '../shared/ingredient.model';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class ShoppingListService {
  private aIngList: Ingredient[] = [
    new Ingredient('Apple', 10),
    new Ingredient('Oranges', 7),
  ];

  addIngredient: EventEmitter<Ingredient> = new EventEmitter<Ingredient>();
  ingredientsListChanged: EventEmitter<Ingredient[]> = new EventEmitter<Ingredient[]>();

  getIngredients() {
    return this.aIngList.slice();
  }

  addIngredientToList(oIngredient: Ingredient) {
    this.aIngList.push(oIngredient);
    this.ingredientsListChanged.emit(this.aIngList.slice());
  }

  addIngredientsToList(aIngredient: Ingredient[]) {
    this.aIngList.push(...aIngredient);
    this.ingredientsListChanged.emit(this.aIngList.slice());
  }
}
