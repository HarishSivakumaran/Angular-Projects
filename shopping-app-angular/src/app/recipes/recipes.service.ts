import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';
import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable()
export class RecipeService {
  private aRecipes: Recipe[] = [
    new Recipe(
      'Dosa',
      'Delicious Dosa',
      'https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=1600',
      [new Ingredient('Batter', 2), new Ingredient('Ghee', 3)]
    ),
    new Recipe(
      'Butter Chicken Kulcha',
      'The classic juicy, spicy, creamy and mouth-watering butter chicken',
      'https://tse1.mm.bing.net/th?id=OIP.lcuD1WH5UEpqPm0Lni0SiwHaJ4&pid=Api',
      [new Ingredient('Chicken pieces', 2), new Ingredient('Tomato', 3)]
    )
  ];

  showRecipeDetails: EventEmitter<Recipe> = new EventEmitter<Recipe>();

  constructor(private shoppingListService: ShoppingListService){}

  getRecipes() {
    return this.aRecipes.slice();
  }

  addIngredientsList(oRecipe: Recipe){
    this.shoppingListService.addIngredientsToList(oRecipe.aIngredient);
  }
}
