import React from "react";
import { getRecipeID } from "../calls/recipe";

export default class RecipeDetail extends React.Component {

  render(){
    var {idRecipe} = this.props.params;
    var detalle = getRecipeID(idRecipe)[0];
    return(
      <div class="row">
        <div class="col s12 m4 l3">
          <div class="recipe">
            <div class="col s12" style={{height:"0px"}}>

            </div>
            <div>
              <h4 class="center">{detalle.name}</h4>
              <br/>
              <p class="resume">{detalle.description}</p>
            </div>
          </div>
        </div>
      </div>


    );
  }
}
