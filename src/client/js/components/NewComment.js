import React from "react";
import {observer} from 'mobx-react';
import {viewStore , commentStore,recipeStore} from "../mobx/stores";
import {Constants} from "../util/Constants";

@observer
export default class NewComment extends React.Component {

  sendComment(event){
    let comment = {};
    if (event.which === Constants.KEYS.ESCAPE_KEY) {
      viewStore.showNewComment = false;
      this.refs.txtNewComment.value = "";
      this.refs.txtNameNewComment.value = "";

    } else if (event.which === Constants.KEYS.ENTER_KEY) {
      viewStore.showNewComment = false;
      comment.con_name = this.refs.txtNameNewComment.value;
      comment.con_description = this.refs.txtNewComment.value;
      commentStore.addComment(comment,recipeStore.actualRecipe);
      this.refs.txtNewComment.value = "";
      this.refs.txtNameNewComment.value = "";
    }

  }

  render() {
    var show = viewStore.showNewComment?"":"hide";

    return (
        <div class={show}>
          <div class="card-panel grey lighten-3">
            <input ref="txtNameNewComment" placeholder="Write a comment's title"/><br/>
            <textarea ref="txtNewComment"
              class="materialize-textarea"
              length="120"
              placeholder="Write something and press 'ENTER' button"
              onKeyDown={this.sendComment.bind(this)}
              >
            </textarea>
          </div>
        </div>

    );
  }
}
