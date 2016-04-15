import React from "react";

export default class Search extends React.Component {
  render() {
    return (
      <section>
        <input id="search" type="search" required placeholder="Find a recipe here!" />
      </section>
    );
  }
}
