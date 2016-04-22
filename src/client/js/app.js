import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";
import {createHistory} from "history";


import ListRecipe from "./pages/ListRecipe";
import RecipeDetail from "./components/RecipeDetail";
import Layout from "./pages/Layout";

const app = document.getElementById("app");

ReactDOM.render(
  <Router history={createHistory()}>
    <Route path="/" component={Layout}>
      <IndexRoute component={ListRecipe}></IndexRoute>
      <Route path="recipe/:idRecipe" name="recipeDetail" component={RecipeDetail}></Route>
    </Route>
  </Router>,
app);
