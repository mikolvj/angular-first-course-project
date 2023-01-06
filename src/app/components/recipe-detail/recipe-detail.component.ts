import { Component, Input } from '@angular/core';
import { Ingredient } from 'app/shared/ingredient.model';
import { Recipe } from 'app/shared/recipe.model';
import { ShoppingListService } from 'app/shared/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss'],
})
export class RecipeDetailComponent {
  @Input() selectedRecipe: Recipe;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {}

  addToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addMultipleIngredients(ingredients);
  }
}
