import { Recipe } from './../../recipe.model';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {
   @Input('recipe')
   recipe: Recipe;

   @Output('recipeSelected')
   recipeSelected: EventEmitter<Recipe> = new EventEmitter<Recipe>();

   selectRecipe(){
     this.recipeSelected.emit(this.recipe);
   }
}
