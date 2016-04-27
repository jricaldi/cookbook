import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory, browserHistory } from "react-router";
import {createHistory} from "history";
import {recipeStore} from "./mobx/stores"


import ListRecipe from "./components/ListRecipe";
import RecipeDetail from "./components/RecipeDetail";
import Layout from "./components/Layout";

const app = document.getElementById("app");

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={ListRecipe}></IndexRoute>
      <Route path="recipe/:idRecipe" name="recipeDetail" component={RecipeDetail}></Route>
    </Route>
  </Router>,
app);
