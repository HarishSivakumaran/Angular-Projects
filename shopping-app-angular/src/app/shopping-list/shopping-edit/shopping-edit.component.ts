import { ShoppingListService } from './../shopping-list.service';
import { Ingredient } from './../../shared/ingredient.component';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent {
  currentIngredient: Ingredient = new Ingredient('', 0);

  @Output()
  addIngredientToList: EventEmitter<Ingredient> =
    new EventEmitter<Ingredient>();

  constructor(private shoppingListService: ShoppingListService) {}

  addIngredient() {
    this.shoppingListService.addIngredient.emit(this.currentIngredient);
    this.currentIngredient = new Ingredient('', 0);
  }
}
