import {recipes} from "../dataTemp/recipes";

export function getListRecipes(){
  return $.get("/api/recipes");
}

export function getRecipeID(name_url){
  return $.get("/api/recipes/" + name_url);
}

export function getLastRecipes(){
  return $.get("/api/recipes/last");
}

/*
function getListRecipesCategory(category){
  return $.get("/api/recipes/category/" + category)
}
*/
