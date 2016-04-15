import React from "react";
import ReactDom from "react-dom";
import $ from "jquery";

class Layout extends React.Component {
  constructor(){
    super();
  }

  render() {
    return (
      <h1>hola</h1>
    )
  }
}

const app = $("#app");

ReactDom.render(<Layout />, app);
