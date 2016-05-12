import React from "react";
import {observer} from 'mobx-react';
import {viewStore , commentStore,recipeStore} from "../mobx/stores";
import {Constants} from "../util/Constants";

@observer
export default class NewComment extends React.Component {


  sendComment(event){
        console.log(this.props);
    let comment = {};
    if (event.which === Constants.KEYS.ESCAPE_KEY) {
      viewStore.showNewComment = false;
      this.refs.txtNewComment.value = "";
      this.refs.txtNameNewComment.value = "";

    } else if (event.which === Constants.KEYS.ENTER_KEY) {
      viewStore.showNewComment = false;
      comment.con_name = this.refs.txtNameNewComment.value;
      comment.con_description = this.refs.txtNewComment.value;
      comment.con_points = this.refs.point.value;
      comment.scoreRecipe = this.props.scoreRecipe;
      commentStore.addComment(comment,recipeStore.actualRecipe);
      this.refs.txtNewComment.value = "";
      this.refs.txtNameNewComment.value = "";
      this.props.setScoreTitle(parseInt(comment.con_points) + parseInt(comment.scoreRecipe));
    }

  }

  render() {
    console.log(this.props);
    var show = viewStore.showNewComment?"":"hide";

    return (
        <div class={show}>
          <div class="card-panel grey lighten-3 borderNewRecipe">
            <p class="range-field">
              <label for="point" class="bold black-text">Choose a point:</label>
              <input type="range" id="point" ref="point" min="0" max="5"/>
            </p>
            <input ref="txtNameNewComment" placeholder="Write a comment's title"/><br/>
            <textarea ref="txtNewComment"
              class="materialize-textarea"
              length="120"
              placeholder="Write something and press ENTER button"
              onKeyDown={this.sendComment.bind(this)}
              >
            </textarea>
          </div>
        </div>

    );
  }
}
