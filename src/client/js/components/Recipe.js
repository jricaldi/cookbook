import React from "react";

export default class Recipe extends React.Component {
  render() {
    const { name, category } = this.props;
    var imgCategory = "";
    switch (category) {
      case "Pastas":
        imgCategory = "./img/categories/pastas.png";
        break;
      case "Meat":
        imgCategory = "./img/categories/meat.png";
        break;
      case "Salads":
        imgCategory = "./img/categories/salads.png";
        break;
      case "Desserts":
        imgCategory = "./img/categories/desserts.png";
        break;

    }
    console.log(this.props);
    return (
      <div class="col s12 m4 l3 recipeCotainer">
        <div class="recipe hoverable">
          <img src={imgCategory} class="iconCategory"/>
          <h4 class="center">
            {name}</h4>
          <br/>
          <p class="resume">Pequeña descripción</p>
        </div>
      </div>
    );
  }
}
