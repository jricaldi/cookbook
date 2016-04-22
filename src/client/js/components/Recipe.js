import React from "react";
import {Link} from "react-router";

export default class Recipe extends React.Component {

  // constructor(props, context) {
  //     super(props, context);
  // }

  // navigate(){
  //   //this.props.history.pushState(null,"/recipe/" + id);
  //   this.props.history.pushState('recipe', {idRecipe: 'aji-de-gallina'})
  // }
  render() {

    let {idRecipe}=this.props;

    const { name, category } = this.props;
    let imgCategory = "";
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

    return (
      <div class="col s12 m4 l3 recipeCotainer" >
        <Link to={`/recipe/${idRecipe}`}>
          <div class="recipe hoverable">
            <div class="col s12" style={{height:"0px"}}>
              <img src={imgCategory} class="iconCategory"/>
            </div>
            <div>
              <h4 class="center">{name}</h4>
              <br/>
              <p class="resume">Pequeña descripción</p>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}
