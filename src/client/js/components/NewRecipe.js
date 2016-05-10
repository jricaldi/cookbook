import React from "react";
import {observer} from 'mobx-react';
import {recipeStore} from "../mobx/stores";
import CmbCategoria from "./objects/CmbCategoria";
import {getCategories} from "../calls/categories";

@observer
export default class NewRecipe extends React.Component {

  saveRecipe(event){
    event.preventDefault();
    var recipe = {};
    recipe.name = this.refs.name.value;
    recipe.chef = this.refs.chef.value;
    recipe.preparation = this.refs.preparation.value;
    console.log(this.refs.category);
    // recipe.category = this.refs.category.value;
    var $this = this;
    recipe.ingredients = Array.from(Array(10).keys()).map((e,i)=>{
      let name = "name"+i;
      let value_name = $this.refs["ingredientName" + i].value;
      let amount = "amount"+i;
      let value_amount = $this.refs["ingredientAmount" + i].value;
      return {[name] : value_name, [amount] : value_amount}
    });

    console.log(recipe);
    // recipeStore.addRecipe(recipe);
    this.props.history.pushState(null, '/');

  }

  render() {

    let ingredients = Array.from(Array(10).keys()).map((e,i)=>
      <div class="row" key={i}>
        <div class="input-field col s2">
          <input placeholder="Name" id={`ingredientName${i}`} ref={`ingredientName${i}`} type="text" class="validate"/>
        </div>
        <div class="input-field col s2">
          <input placeholder="Amount" id={`amount${i}`} ref={`ingredientAmount${i}`} type="text" class="validate"/>
        </div>
      </div>
    );

    let categories = getCategories().map(
      (category,i)=>
        <option key={i} value={category}
          data-icon={`../../../img/categories/${category}.png`}
          class="left circle responsive-img"
          >{category}</option>
    );

    return (
      <div class="col s12">
        <div class="card-panel brown lighten-5">
          <form onSubmit={this.saveRecipe.bind(this)}>
            <div class="row">
              <div class="input-field col s6">
                <input placeholder="Recipe name" type="text" class="validate" ref="name"/>
              </div>
            </div>
            <div class="row">
              <div class="col s3">
                <select class="browser-default" ref="category" id="category">
                  <option>All</option>
                  {categories}
                </select>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s6">
                <input placeholder="Chef's name" type="text" class="validate" ref="chef"/>
              </div>
            </div>
            <div class="row">
              <span>Ingredients (Add maximun 10 of them)</span>
              {ingredients}
            </div>
            <div class="row">
              <textarea name="preparation" id="preparation" ref="preparation" class="materialize-textarea" length="120" placeholder="Preparation"></textarea>
            </div>
            <div class="row center">
              <button class="btn" type="submit">Submit Recipe</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
