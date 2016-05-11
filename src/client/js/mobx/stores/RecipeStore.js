import {observable, computed} from 'mobx';
import RecipeModel from '../models/RecipeModel'
import  {getListRecipes} from "../../calls/recipe";
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
		recipe.ingredients.forEach((ing)=>{
			ing.id = uuid();
		});
		this.recipes.push(new RecipeModel(this, uuid(),
			recipe.name, recipe.category,
			recipe.chef, recipe.preparation, recipe.ingredients));
		$.post("/api/recipes", recipe);

	}

}
