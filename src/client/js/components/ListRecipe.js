import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import {observer} from 'mobx-react';
import Recipe from "./Recipe";
import {recipeStore, categoryStore} from "../mobx/stores";
import { Constants} from "../util/Constants";

@observer
export default class ListRecipe extends React.Component {

  render() {
    let tempRecipes = recipeStore.recipes.filter((recipe)=>{
      if(categoryStore.category === Constants.CATEGORY.ALL)
        return true;
      return (recipe.category).toUpperCase() === (categoryStore.category).toUpperCase();
    });

    const Recipes = tempRecipes.map((recipe, i) =>
      <Recipe
      key={recipe.id}
      recipe={recipe}/>
    );

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
