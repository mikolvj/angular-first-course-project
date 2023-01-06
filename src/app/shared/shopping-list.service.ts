import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from 'app/shared/ingredient.model';

@Injectable()
export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();

  newIgredient: {
    name: string;
    amount: number;
  };

  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  getIngredients(): Ingredient[] {
    return [...this.ingredients];
  }

  addSingleIngredient(ingredient: Ingredient) {
    this.ingredients.push(new Ingredient(ingredient.name, ingredient.amount));
    this.ingredientsChanged.emit([...this.ingredients]);
  }

  addMultipleIngredients(newIngredients: Ingredient[]) {
    newIngredients.forEach((ingredient) =>
      this.ingredients.push(new Ingredient(ingredient.name, ingredient.amount))
    );
    this.ingredientsChanged.emit([...this.ingredients]);
  }
}
