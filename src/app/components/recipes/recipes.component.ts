import { Component } from '@angular/core';
import { Recipe } from 'app/shared/recipe.model';
import { RecipesService } from 'app/shared/recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
})
export class RecipesComponent {
  selectedRecipe: Recipe;

  constructor(private recipeService: RecipesService) {}

  ngOnInit() {
    this.recipeService.selectedRecipe.subscribe(
      (recipe: Recipe) => this.selectedRecipe = recipe
    );
  }


}
