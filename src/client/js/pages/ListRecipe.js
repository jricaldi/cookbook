import React from "react";

import Recipe from "../components/Recipe";

export default class ListRecipe extends React.Component {
  render() {
    //TODO: Get recipes from database
    const Recipes = [
      {
        name:"Aji de Gallina",
        category:"Meat",
        chef: "Jorge Ricaldi",
        ingredients:{
          ingredient:{
            name:"aji",
            amount:"300gr"
          },
          ingredient:{
            name:"gallina",
            amount:"1kg"
          }
        }
      },
      {
        name:"Lomo saltado",
        category:"Meat",
        chef: "Jorge Ricaldi",
        ingredients:{
          ingredient:{
            name:"aji",
            amount:"300gr"
          },
          ingredient:{
            name:"gallina",
            amount:"1kg"
          }
        }
      },
      {
        name:"Gelatina de fresa",
        category:"Desserts",
        chef: "Jorge Ricaldi",
        ingredients:{
          ingredient:{
            name:"aji",
            amount:"300gr"
          },
          ingredient:{
            name:"gallina",
            amount:"1kg"
          }
        }
      },
      {
        name:"Sopa de casa",
        category:"Meat",
        chef: "Jorge Ricaldi",
        ingredients:{
          ingredient:{
            name:"aji",
            amount:"300gr"
          },
          ingredient:{
            name:"gallina",
            amount:"1kg"
          }
        }
      },
      {
        name:"Aguadito",
        category:"Salads",
        chef: "Jorge Ricaldi",
        ingredients:{
          ingredient:{
            name:"aji",
            amount:"300gr"
          },
          ingredient:{
            name:"gallina",
            amount:"1kg"
          }
        }
      },
      {
        name:"Tallarines rojos",
        category:"Pastas",
        chef: "Jorge Ricaldi",
        ingredients:{
          ingredient:{
            name:"aji",
            amount:"300gr"
          },
          ingredient:{
            name:"gallina",
            amount:"1kg"
          }
        }
      }
    ].map((recipe, i) => <Recipe key={i} name={recipe.name} category={recipe.category}/> );

    return (
        <div class="row">
          {Recipes}
        </div>
    );
  }
}
