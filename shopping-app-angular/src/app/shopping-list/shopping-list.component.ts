import { ShoppingListService } from './shopping-list.service';
import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.component';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  aIngredientList: Ingredient[] = [];

  constructor(private shoppingListService: ShoppingListService) {
    this.shoppingListService.addIngredient.subscribe(
      (oIngredient: Ingredient) => {
        this.aIngredientList.push(oIngredient);
        this.shoppingListService.addIngredientToList(oIngredient);
      }
    );
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.aIngredientList = this.shoppingListService.getIngredients();
  }
}
