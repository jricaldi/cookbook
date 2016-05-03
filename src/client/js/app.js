import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory, browserHistory } from "react-router";
import {createHistory} from "history";
import {recipeStore} from "./mobx/stores"


import ListRecipe from "./components/ListRecipe";
import RecipeDetail from "./components/RecipeDetail";
import Layout from "./components/Layout";
import NewRecipe from "./components/NewRecipe";

const app = document.getElementById("app");

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={ListRecipe}></IndexRoute>
      <Route path="recipe/:idRecipe" name="recipeDetail" component={RecipeDetail}></Route>
      <Route path="newRecipe" name="newRecipe" component={NewRecipe}></Route>
    </Route>
  </Router>,
app);
