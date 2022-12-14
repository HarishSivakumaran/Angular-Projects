import { RecipeService } from './../recipes.service';
import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  aRecipeList: Recipe[];

  @Output('showDetails') showRecipeDetail: EventEmitter<Recipe> =
    new EventEmitter<Recipe>();
  showDetails(oRecipe: Recipe) {
    // this.showRecipeDetail.emit(oRecipe);
  }

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.aRecipeList = this.recipeService.getRecipes();
  }
}
