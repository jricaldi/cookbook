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
  }

  render() {
    const Recipes = this.props.route.recipeStore.recipes.map((recipe, i) =>
    <Recipe
      key={recipe.id}
      recipe={recipe} /> );

    return (
        <div>
          {Recipes}
        </div>
    );
  }
}
