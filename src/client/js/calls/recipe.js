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
  let terms = term.split(" ");
  console.log(terms);
  if(terms.length === 1){
    let list = getListRecipesCategory(terms[0]);
    if(list.length >= 1)
      return list;
    else
      return getRecipeTerm(terms[0]);
  }
  else{
    //TODO: search multi terms
  }

}

function getRecipeTerm(term){
  return getListRecipes().filter((recipe)=>
    (recipe.name).includes(term)
  );

}
