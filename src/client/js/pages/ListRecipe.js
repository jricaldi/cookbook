import React from "react";

import Recipe from "../components/Recipe";

export default class ListRecipe extends React.Component {
  render() {
    //TODO: Get recipes from database
    const Recipes = [
      "Aji de Gallina",
      "Lomo saltado",
      "Pure con papas",
      "Sopa de casa",
      "Aguadito",
      "Tallarines rojos"
    ].map((recipeName, i) => <Recipe key={i} recipeName={recipeName} hola={recipeName}/> );

    return (
        <div class="row">
          {Recipes}
        </div>
    );
  }
}
