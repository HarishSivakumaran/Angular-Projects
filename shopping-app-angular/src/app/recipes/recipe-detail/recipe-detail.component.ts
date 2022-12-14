import { RecipeService } from './../recipes.service';
import { Recipe } from './../recipe.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  @Input('recipe') SelectedRecipe: Recipe;

  ngOnInit(): void {}

  constructor(private recipeService: RecipeService){}

  addIngredientsToShoppingList(){
    this.recipeService.addIngredientsList(this.SelectedRecipe);
  }
}
