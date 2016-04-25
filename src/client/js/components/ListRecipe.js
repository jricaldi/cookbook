import React from "react";
import {observer} from 'mobx-react';
import Recipe from "./Recipe";
import {recipeStore} from "../mobx/stores";

@observer
export default class ListRecipe extends React.Component {

  constructor(props,context){
    super(props,context);
    //this.state = {list : recipeStore.recipes};
    this.state = {list : this.props.route.recipeStore.recipes}
    console.log("listRecipe")
  }

  render() {
    console.log(recipeStore.recipes);
    console.log(this.state.list);
    const Recipes = this.props.route.recipeStore.recipes.map((recipe, i) =>
    <Recipe
      key={recipe.id}
      recipe={recipe} /> );

    return (
        <div class="row">
          {Recipes}
        </div>
    );
  }
}
