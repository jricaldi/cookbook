import {observable, computed} from 'mobx';
import RecipeModel from '../models/RecipeModel'
import  {getListRecipes, getRecipeTerms} from "../../calls/recipe";
import {uuid} from "../../util/Functions";

export default class RecipeStore {

	@observable recipes = [];
	startRecipes = [];

	constructor() {
		this.getRecipeFromDB();
	}

	@computed get totalRecipes() {
		return this.recipes.length;
	}

	getRecipeFromDB(model) {
		//TODO: Get from BD
		let firstList = getListRecipes().map(
			(recipe)=> RecipeModel.fromJson(this,recipe)
		);
		this.recipes = Object.assign([], firstList);
		this.startRecipes = firstList;
	}

	searchTerm(term){
		this.recipes = getRecipeTerms(term).map(
			(recipe)=> RecipeModel.fromJson(this,recipe)
		);
		if(this.recipes.length<1){
			this.recipes = this.startRecipes;
		}
	}

	addRecipe(recipe) {
		var id = uuid();
		recipe.id = id;
		this.recipes.push(new RecipeModel(this, recipe.id,
			recipe.name, recipe.category,
			recipe.chef, recipe.preparation, recipe.ingredients));
		$.post("/api/recipes", recipe);

	}

}
