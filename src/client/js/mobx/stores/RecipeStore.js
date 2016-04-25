import {observable, computed, autorun} from 'mobx';
import TodoModel from '../models/RecipeModel'

export default class RecipeStore {
	key;
	@observable recipes = [];

	constructor(key) {
		this.key = key;

		this.getRecipeFromDB();
		this.subscribeLocalStorageToModel();
	}

	@computed get totalRecipes() {
		return this.recipes.length;
	}

	getRecipeFromDB(model) {
		//TODO: Get from BD
		//this.recipes = 
	}

	addRecipe(recipe) {
		this.recipes.push(new RecipeModel(this, 
			/*Utils.uuid()*/, recipe.name, recipe.category,
			recipe.chef, recipe.description, recipe.ingredients));
	}

}
