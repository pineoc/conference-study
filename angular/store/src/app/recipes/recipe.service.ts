import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";
// manage recipes
@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe1',
      'This is simply a test',
      'https://cdn.pixabay.com/photo/2015/07/01/23/03/cocktail-828182_960_720.jpg',
      [
        new Ingredient('Meat', 2),
        new Ingredient('sss', 2)
      ]),
    new Recipe(
      'A Test Recipe2',
      'This is simply a test',
      'https://cdn.pixabay.com/photo/2015/07/16/06/51/strawberry-mojito-847240_960_720.jpg',
      [
        new Ingredient('Meat', 2),
        new Ingredient('sss', 2)
      ]
      )
  ];

  constructor(private slService: ShoppingListService) {

  }

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
