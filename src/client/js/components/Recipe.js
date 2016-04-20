import React from "react";

export default class Recipe extends React.Component {
  render() {
    const { recipeName } = this.props;
    console.log(this.props);
    return (
      <div class="col s12 m4 l3 recipe hoverable">
          <h4 class="center">{recipeName}</h4>
          <br/>
          <p class="resume">Pequeña descripción</p>
      </div>
    );
  }
}
