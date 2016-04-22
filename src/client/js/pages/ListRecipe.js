import React from "react";

import Recipe from "../components/Recipe";
import {getListRecipes} from "../calls/recipe";

export default class ListRecipe extends React.Component {

  constructor(props,context){
    super(props,context);
    // this.state = {list : getListRecipes()};
    this.constructor.contextTypes = {
      listRecipe: React.PropTypes.array
    }
    this.state = {listRecipe : this.context.listRecipe}
    console.log(this.context.listRecipe);
  }

  render() {
    const Recipes = getListRecipes().map((recipe, i) =>
    <Recipe
      key={i}
      name={recipe.name}
      category={recipe.category}
      idRecipe={recipe.id}/> );

    return (
        <div class="row">
          {Recipes}
        </div>
    );
  }
}
