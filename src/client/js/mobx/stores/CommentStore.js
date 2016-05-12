import {observable} from 'mobx';
import {uuid} from "../../util/Functions";

export default class CommentStore {

	@observable comments = [];

	addComment(comment,id_recipe) {
		console.log(comment);
		comment.id_comment = uuid();

		this.comments.push(comment);
		console.log(this.comments);
		$.post("/api/recipes/" + id_recipe + "/comments" , comment);

	}

}
