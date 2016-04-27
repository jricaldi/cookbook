import {observable} from 'mobx';
import {Constant} from "../../util/Constants";

export default class CategoryStore {

	@observable category = Constant.CATEGORY.NONE;
	
}
