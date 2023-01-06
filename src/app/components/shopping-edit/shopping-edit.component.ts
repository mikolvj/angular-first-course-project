import { Component } from '@angular/core';
import { ShoppingListService } from 'app/shared/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss'],
})
export class ShoppingEditComponent {
  ingredientName: string;
  ingredientAmount: number = 1;

  constructor(private shoppingListService: ShoppingListService) {}

  addIngredient(name, amount) {
    this.shoppingListService.addSingleIngredient({ name, amount });
    this.ingredientName = '';
    this.ingredientAmount = 1;
  }
}
