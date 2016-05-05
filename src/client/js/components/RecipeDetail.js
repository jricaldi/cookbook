import React from "react";
import {observer} from 'mobx-react';
import { getRecipeID } from "../calls/recipe";
import {getImageCategory} from "../util/Functions";
import ListComment from "./ListComment";
import BtnNewComment from "./objects/BtnNewComment";
import NewComment from "./NewComment";

@observer
export default class RecipeDetail extends React.Component {

  render(){
    var {idRecipe} = this.props.params;
    var detalle = getRecipeID(idRecipe)[0];
    let imgCategory = getImageCategory(detalle.category);

    return(
        <div class="col s12 recipeBigCotainer" >
            <div class="col s12 recipe">
              <div class="col s12" style={{height:"0px"}}>
                <img src={imgCategory} class="iconCategoryLarge"/>
              </div>
              <div class="col s12">
                <h4 class="center">{detalle.name}</h4>
                <br/>
                <p class="resume">{detalle.description}</p>
              </div>
            </div>
            <div class="col s12">
              <BtnNewComment/>
              <NewComment/>
              <ListComment/>
            </div>
        </div>


    );
  }
}
