import {observable, computed, autorun} from 'mobx';
import RecipeModel from '../models/RecipeModel'
import  {getListRecipes, getLastRecipes} from "../../calls/recipe";
import {uuid, genNameUrl} from "../../util/Functions";

export default class RecipeStore {

	@observable recipes = [];
	@observable actualRecipe;
	@observable lastRecipes = [];
	startRecipes = [];

	constructor() {
		this.getRecipeFromDB();
		this.getLastRecipesFromDB();
	}

	@computed get totalRecipes() {
		return this.recipes.length;
	}

	async getLastRecipesFromDB(model){
		let lastRecipes = await getLastRecipes();
		lastRecipes = lastRecipes.map(
			(recipe)=> RecipeModel.fromJson(this,recipe)
		);
		this.lastRecipes = Object.assign([],lastRecipes);
	}



	async getRecipeFromDB(model) {
		let firstList = await getListRecipes();
		firstList = firstList.map(
			(recipe)=> RecipeModel.fromJson(this,recipe)
		);
		this.recipes = Object.assign([], firstList);
		this.startRecipes = firstList;
	}

	searchTerm(term){
		this.recipes = this.getRecipeTerms(term);
		if(this.recipes.length<1 || term === ""){
			this.recipes = Object.assign([], this.startRecipes);
		}
	}

	getRecipeTerms(term){
			return this.recipes.filter((recipe)=>
				((recipe.name).toUpperCase()).includes(term.toUpperCase())
			);
	}

	addRecipe(recipe) {
		recipe.id_recipe = uuid();
		recipe.name_url = genNameUrl(recipe.name);
		if(recipe.ingredients.length >	1){
			recipe.ingredients.forEach((ing)=>{
				ing.id_ingredient = uuid();
			});
		}
		let recipeModel = new RecipeModel(this, recipe.id_recipe,
			recipe.name, recipe.category,
			recipe.chef, recipe.preparation,
			recipe.ingredients, recipe.name_url);

		this.recipes.push(recipeModel);
		this.lastRecipes.unshift(recipeModel);
		$.post("/api/recipes", recipe);

	}

}
