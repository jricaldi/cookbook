import React from "react";
import {observer} from 'mobx-react';
import { Constants} from "../util/Constants";

@observer
export default class Comment extends React.Component {

  render() {


    return (
        <div>
          <div class="card-panel brown lighten-5">
            <span class="brown-text text-darken-4 bold">Comment name</span><br/><br/>
            <span class="">I am a very simple card. I am good at containing small bits of information.
            I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.
            </span>
          </div>
        </div>
    );
  }
}
