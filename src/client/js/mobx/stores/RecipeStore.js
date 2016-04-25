import {observable, computed} from 'mobx';
import RecipeModel from '../models/RecipeModel'
import  {getListRecipes, getRecipeTerms} from "../../calls/recipe";

export default class RecipeStore {

	@observable recipes = [];

	constructor() {
		console.log("RecipeStore");
		this.getRecipeFromDB();
	}

	@computed get totalRecipes() {
		return this.recipes.length;
	}

	getRecipeFromDB(model) {
		//TODO: Get from BD
		this.recipes = getListRecipes().map(
			(recipe)=> RecipeModel.fromJson(this,recipe)
		);
	}

	searchTerm(term){
		this.recipes = getRecipeTerms(term).map(
			(recipe)=> RecipeModel.fromJson(this,recipe)
		);
		console.log(this.recipes);
	}

	addRecipe(recipe) {
		this.recipes.push(new RecipeModel(this,
			recipe.id, recipe.name, recipe.category,
			recipe.chef, recipe.description, recipe.ingredients));
	}

}
