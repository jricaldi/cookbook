import React from "react";
import {observer} from 'mobx-react';
import { Constants} from "../util/Constants";
import Comment from "./Comment"
import NewComment from "./NewComment";

@observer
export default class ListComment extends React.Component {

  render() {


    return (
      <div>
        <Comment/>
        <Comment/>
        <Comment/>
      </div>
    );
  }
}
