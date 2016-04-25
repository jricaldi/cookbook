import React from "react";
import {observer} from 'mobx-react';

import Search from "./Search";

@observer
export default class Layout extends React.Component {
  render() {

    return (
      <div class="container">
        <Search/>
        {this.props.children}
      </div>
    );
  }
}
