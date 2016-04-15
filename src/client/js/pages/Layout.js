import React from "react";

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Search from "../components/layout/Search";

export default class Layout extends React.Component {
  render() {

    const { location } = this.props;

    return (
      <div class="container">
        <Header />
        <Search />
        {this.props.children}
        <Footer />
      </div>

    );
  }
}
