import {observable} from 'mobx';
import {Constants} from "../../util/Constants";

export default class CategoryStore {

	@observable category = Constants.CATEGORY.ALL;

}
