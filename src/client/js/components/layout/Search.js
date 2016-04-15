import React from "react";

export default class Search extends React.Component {
  render() {
    return (
      <header>
        <input id="search" type="search" required placeholder="Find a recipe here!" />
      </header>
    );
  }
}
