import React from "react";
import {observer} from 'mobx-react';
import { getRecipeID } from "../calls/recipe";
import {getImageCategory} from "../util/Functions";

@observer
export default class RecipeDetail extends React.Component {

  render(){
    var {idRecipe} = this.props.params;
    var detalle = getRecipeID(idRecipe)[0];
    let imgCategory = getImageCategory(detalle.category);
    console.log(imgCategory);

    var array = [];
    for (var i = 0; i < 20; i++) {
      array.push(i);
    }
    console.log(array);


    return(
        <div class="col s12 recipeCotainer" >
            <div class="recipe">
              <div class="col s12" style={{height:"0px"}}>
                <img src={imgCategory} class="iconCategoryLarge"/>
              </div>
              <div class="col s12">
                <h4 class="center">{detalle.name}</h4>
                <br/>
                <p class="resume">{detalle.description}</p>
              </div>
            </div>
        </div>


    );
  }
}
