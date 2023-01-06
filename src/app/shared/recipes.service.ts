import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from 'app/shared/recipe.model';
import { Ingredient } from './ingredient.model';

@Injectable()
export class RecipesService {
  selectedRecipe = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Test recipe',
      'This is just a test',
      'https://picsum.photos/id/227/400/300',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Flour', 50),
        new Ingredient('Egg', 2),
      ]
    ),
    new Recipe(
      'Another recipe',
      'This is just a test',
      'https://picsum.photos/id/237/400/300',
      [
        new Ingredient('Burger', 2),
        new Ingredient('Roll', 1),
        new Ingredient('Cheese', 2),
        new Ingredient('Onion', 1),
      ]
    ),
  ];

  getRecipes(): Recipe[] {
    return [...this.recipes];
  }
}
