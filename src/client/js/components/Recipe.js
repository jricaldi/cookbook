import React from "react";

export default class Recipe extends React.Component {
  render() {
    const { recipeName } = this.props;
    console.log(this.props);
    return (
      <div class="col s12 recipe">
        <div class="card-panel teal hoverable">
          <h4>{recipeName}</h4>
          <p class="resume">Pequeña descripción</p>
        </div>
      </div>
    );
  }
}
