import {recipes} from "../dataTemp/recipes";

export function getListRecipes(){
  return recipes;
}

export function getRecipeID(idRecipe){
  return getListRecipes().filter((recipe)=>
    recipe.id === idRecipe
  );
}

function getListRecipesCategory(category){
  return getListRecipes().filter((recipe)=>
    (recipe.category).toUpperCase() === category.toUpperCase()
  );
}

export function getRecipeTerms(term){
    let list = getListRecipesCategory(term);
    if(list.length >= 1){
      return list;
    }
    else
      return getRecipeTerm(term);
}

function getRecipeTerm(term){
  return getListRecipes().filter((recipe)=>
    ((recipe.name).toUpperCase()).includes(term.toUpperCase())
  );

}
