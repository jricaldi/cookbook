import {recipes} from "../dataTemp/recipes";

export function getListRecipes(){
  return $.get("/api/recipes");
}

export function getRecipeID(idRecipe){
  // return getListRecipes().filter((recipe)=>
  //   recipe.id === idRecipe
  // );
  return $.get("/api/recipes/" + idRecipe);
}

/*
function getListRecipesCategory(category){
  return $.get("/api/recipes/category/" + category)
}
*/
/*
export function getRecipeTerms(term){
    let list = getListRecipesCategory(term);
    if(list.length >= 1){
      return list;
    }
    else
      return getRecipeTerm(term);
}
*/
/*
function getRecipeTerm(term){
  return getListRecipes().filter((recipe)=>
    ((recipe.name).toUpperCase()).includes(term.toUpperCase())
  );

}
*/
