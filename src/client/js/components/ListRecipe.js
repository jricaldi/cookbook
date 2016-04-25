import React from "react";
import {observer} from 'mobx-react';
import Recipe from "./Recipe";
import {recipeStore} from "../mobx/stores";

@observer
export default class ListRecipe extends React.Component {

  render() {
    console.log(recipeStore.recipes);
    const Recipes = recipeStore.recipes.map((recipe, i) =>
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
