import {observable} from 'mobx';

export default class RecipeModel {
	store;
	id;
	@observable name;
	@observable category;
	@observable chef;
	@observable description;
	@observable ingredients;

	constructor(store, id, name, category, chef, description, ingredients ) {
		this.store = store;
		this.id = id;
		this.name = name;
		this.category = category;
		this.chef = chef;
		this.description = description;
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

	setDescription(description) {
		this.description = description;
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
			description: this.description,
			ingredients: this.ingredients
		};
	}

	static fromJson(store, json) {
		return new TodoModel(store, 
			json.id, json.name, json.category,
			json.chef, json.description, json.ingredients
		);
	}
}
