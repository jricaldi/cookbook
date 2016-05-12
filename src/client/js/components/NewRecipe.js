import React from "react";
import {observer} from 'mobx-react';
import {recipeStore} from "../mobx/stores";
import CmbCategoria from "./objects/CmbCategoria";
import {categoryStore} from "../mobx/stores";

@observer
export default class NewRecipe extends React.Component {


  saveRecipe(event){
    event.preventDefault();
    var recipe = {};
    recipe.name = this.refs.name.value;
    recipe.chef = this.refs.chef.value;
    recipe.preparation = this.refs.preparation.value;
    recipe.category = this.refs.category.value;
    var $this = this;
    recipe.ingredients = [];
    Array.from(Array(10).keys()).forEach((e,i)=>{
      let value_name = ($this.refs["ingredientName" + i].value).trim();
      let value_amount = ($this.refs["ingredientAmount" + i].value).trim();
      if(value_name !="" || value_amount != "")
        recipe.ingredients.push({"name" : value_name, "amount" : value_amount});
    });
    recipeStore.addRecipe(recipe);
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

    let categories = categoryStore.categories.map(
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
                <input placeholder="Recipe name" type="text" class="validate" ref="name" required/>
              </div>
            </div>
            <div class="row">
              <div class="col s3">
                <select class="browser-default" ref="category" id="cmbCategory" required>
                  {categories}
                </select>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s6">
                <input placeholder="Chef's name" type="text" class="validate" ref="chef" required/>
              </div>
            </div>
            <div class="row">
              <span>Ingredients (Add maximun 10 of them)</span>
              {ingredients}
            </div>
            <div class="row">
              <textarea name="preparation" id="preparation" ref="preparation" class="materialize-textarea" length="120" placeholder="Preparation" required></textarea>
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
