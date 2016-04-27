import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import {observer} from 'mobx-react';
import Recipe from "./Recipe";
import {recipeStore} from "../mobx/stores";

@observer
export default class ListRecipe extends React.Component {

  render() {
    const Recipes = recipeStore.recipes.map((recipe, i) =>
    <Recipe
      key={recipe.id}
      recipe={recipe} /> );

    return (
        <div>
          <ReactCSSTransitionGroup
            transitionName="effectList"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}
            transitionAppear={true}
            transitionAppearTimeout={500}
            >
            {Recipes}
          </ReactCSSTransitionGroup>
        </div>
    );
  }
}
