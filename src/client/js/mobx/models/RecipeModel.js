import {observable} from 'mobx';

export default class RecipeModel {
	store;
	id_recipe;
	name;
	category;
	chef;
	preparation;
	ingredients;
	name_url;


	constructor(store, id_recipe, name, category, chef, preparation, ingredients, name_url ) {
		this.store = store;
		this.id_recipe = id_recipe;
		this.name = name;
		this.category = category;
		this.chef = chef;
		this.preparation = preparation;
		this.ingredients = ingredients;
		this.name_url = name_url;
	}

	setName(name) {
		this.name = name;
	}

	setCategory(category) {
		this.category = category;
	}

	setChef(chef) {
		this.chef = chef;
	}

	setDescription(preparation) {
		this.preparation = preparation;
	}

	setIngredients(ingredients) {
		this.ingredients = ingredients;
	}


	destroy() {
		this.store.recipes.remove(this);
	}

	toJson() {
		return {
			id_recipe: this.id_recipe,
			name: this.name,
			category : this.category,
			chef: this.chef,
			preparation: this.preparation,
			ingredients: this.ingredients,
			name_url : this.name_url
		};
	}

	static fromJson(store, json) {
		return new RecipeModel(store,
			json.id_recipe, json.rec_name, json.rec_category,
			json.rec_chef, json.rec_preparation, json.ingredients,
			json.rec_name_url
		);
	}
}
