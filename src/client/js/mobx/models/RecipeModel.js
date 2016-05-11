import {observable} from 'mobx';

export default class RecipeModel {
	store;
	id;
	@observable name;
	@observable category;
	@observable chef;
	@observable preparation;
	@observable ingredients;

	constructor(store, id, name, category, chef, preparation, ingredients ) {
		this.store = store;
		this.id = id;
		this.name = name;
		this.category = category;
		this.chef = chef;
		this.preparation = preparation;
		this.ingredients = ingredients;
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
			id: this.id,
			name: this.name,
			category : this.category,
			chef: this.chef,
			preparation: this.preparation,
			ingredients: this.ingredients
		};
	}

	static fromJson(store, json) {
		return new RecipeModel(store,
			json.id_recipe, json.rec_name, json.rec_category,
			json.rec_chef, json.rec_preparation, json.ingredients
		);
	}
}
