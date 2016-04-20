import React from "react";

import Search from "../components/layout/Search";

export default class Layout extends React.Component {
  render() {

    const { location } = this.props;

    return (
      <div class="container">
        <Search/>
        {this.props.children}
      </div>
    );
  }
}
