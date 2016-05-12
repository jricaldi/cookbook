import {observable} from 'mobx';
import {Constants} from "../../util/Constants";
import  {getCategories} from "../../calls/category";

export default class CategoryStore {

	@observable category = Constants.CATEGORY.ALL;
	@observable categories = [];

	constructor() {
		this.getCategoryFromDB();
	}

	async getCategoryFromDB(model) {
		let categories = await getCategories();
		this.categories = Object.assign([], categories);
	}

}
