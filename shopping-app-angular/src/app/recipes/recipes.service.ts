import { Recipe } from './recipe.model';
import { Injectable, EventEmitter } from "@angular/core";

@Injectable()
export class RecipeService{
 private aRecipes: Recipe[] = [
    new Recipe("Dosa", "Delicious Dosa", "https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=1600"),
    new Recipe("Dosa", "Delicious Dosa", "https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=1600"),
  ];

  showRecipeDetails: EventEmitter<Recipe> = new EventEmitter<Recipe>();

  getRecipes(){
    return this.aRecipes.slice();
  }
}
