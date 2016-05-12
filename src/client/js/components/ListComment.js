import React from "react";
import {observer} from 'mobx-react';
import Comment from "./Comment"
import {commentStore} from "../mobx/stores";
import {getComments} from "../calls/comment";

@observer
export default class ListComment extends React.Component {

  render() {
    let list = commentStore.comments.map((comment,i)=><Comment key={i} detail={comment}/>)
    return (
      <div>
        {list}
      </div>
    );
  }
}
