import React from "react";
import {observer} from 'mobx-react';
import {viewStore} from "../mobx/stores";

@observer
export default class NewComment extends React.Component {

  render() {
    var show = viewStore.showNewComment?"":"hide";

    return (
        <div class={show}>
          <div class="card-panel grey lighten-3">
            <textarea ref="txtNewComment" id="textarea1" class="materialize-textarea" length="120" placeholder="Write a comment and press Enter"></textarea>
          </div>
        </div>

    );
  }
}
