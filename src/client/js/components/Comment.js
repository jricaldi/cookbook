import React from "react";
import {observer} from 'mobx-react';
import { Constants} from "../util/Constants";

@observer
export default class Comment extends React.Component {

  render() {
    let {con_name, con_description} = this.props.detail;
    console.log(this.props);
    return (
        <div>
          <div class="card-panel brown lighten-5">
            <span class="brown-text text-darken-4 bold">{con_name}</span><br/><br/>
            <span class="">{con_description}
            </span>
          </div>
        </div>
    );
  }
}
