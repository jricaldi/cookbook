import React from "react";
import {observer} from 'mobx-react';
import {viewStore} from "./../../mobx/stores";

@observer
export default class BtnNewComment extends React.Component {

  showComment(){
    viewStore.showNewComment = !viewStore.showNewComment;
  }

  render() {

    return (
      <div class="mt30">
        <a class="waves-effect waves-light btn-large orange accent-2 black-text borderCool" onClick={this.showComment.bind(this)}>
          Add Comment
        </a>
      </div>
    );
  }
}
