import React from "react";
import {observer} from 'mobx-react';
import { getRecipeID } from "../calls/recipe";
import {getImageCategory} from "../util/Functions";
import ListComment from "./ListComment";
import BtnNewComment from "./objects/BtnNewComment";
import NewComment from "./NewComment";
import RecipeModel from "../mobx/models/RecipeModel";
import {recipeStore, commentStore} from "../mobx/stores";
import {getComments} from "../calls/comment";

@observer
export default class RecipeDetail extends React.Component {

  constructor(props){
      super(props);
      this.state = {detalle : {}};
      this.state.name_url = this.props.params.name_url;
  }

  async componentDidMount(){
    let detalle = await getRecipeID(this.state.name_url);
    detalle = RecipeModel.fromJson(null, detalle[0])
    recipeStore.actualRecipe = detalle.id_recipe;
    let comments = await getComments(detalle.id_recipe);
    commentStore.comments = Object.assign([], comments);
    this.setState({detalle: detalle});
  }

  render(){

    let detalle = this.state.detalle;
    let imgCategory = "";
    let ingredients = [];
    if(detalle.category!= undefined){
      imgCategory = getImageCategory(detalle.category);
      let listIngres = detalle.ingredients
      if(listIngres.length > 0 || listIngres != undefined){
        ingredients = detalle.ingredients.map((ing,i)=>
          <div key={i}>
            <span>{ing.ing_name}</span> : <span>{ing.ing_amount}</span>
          </div>
        );
      }
    }

    return(
        <div class="col s12 recipeBigCotainer" >
            <div class="col s12 recipe noPointer padNewRecipe borderNewRecipe" >
              <div class="col s12" style={{height:"0px"}}>
                <img src={imgCategory} class="iconCategoryLarge"/>
              </div>
              <div class="col s12 mb10">
                <h4 class="center sub">{detalle.name} <span class="bold brown-text">({detalle.score} points)</span></h4>
              </div>
              <div class="col s12 mb10">
                <h5>Chef's name</h5><br/>
                {detalle.chef}
              </div>
              <div class="col s12 mb10">
                <h5>Ingredients</h5><br/>
                {ingredients}
              </div>
              <div class="col s12 mb10">
                <h5>Preparation</h5><br/>
                {detalle.preparation}
              </div>
            </div>
            <div class="col s12">
              <BtnNewComment/>
              <NewComment scoreRecipe={detalle.score}/>
              <ListComment/>
            </div>
        </div>
    );
  }
}
