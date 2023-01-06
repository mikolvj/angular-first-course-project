import { Component } from '@angular/core';
import { Recipe } from 'app/shared/recipe.model';
import { RecipesService } from 'app/shared/recipes.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent {
  recipes: Recipe[];

  constructor(private recipesService: RecipesService) {}

  ngOnInit() {
    this.recipes = this.recipesService.getRecipes();
  }

  selectRecipe(currRecipe) {
    this.recipesService.selectedRecipe.emit(currRecipe);
  }
}
