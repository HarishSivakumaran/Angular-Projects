import { Component, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  aRecipeList : Recipe[] = [
    new Recipe("Dosa", "Delicious Dosa", "https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=1600")
  ];

  @Output('showDetails') showRecipeDetail : EventEmitter<Recipe> = new EventEmitter<Recipe>();

  showDetails(oRecipe: Recipe){
     this.showRecipeDetail.emit(oRecipe);
  }

}
