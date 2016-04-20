import React from "react";

export default class Search extends React.Component {
  render() {
    return (
      <section>
        <input id="search" class="search"
          type="search"
          placeholder="Find a recipe here!"
          required
          />
      </section>
    );
  }
}
