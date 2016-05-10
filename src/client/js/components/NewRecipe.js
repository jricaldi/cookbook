import React from "react";
import {observer} from 'mobx-react';
import {recipeStore} from "../mobx/stores";

@observer
export default class NewRecipe extends React.Component {

  constructor(props){
    super(props);
    this.state = {name : ""};
  }

  saveRecipe(recipe,event){
    event.preventDefault();
    var recipe = {};
    recipe.name = this.refs.name.value;
    recipe.chef = this.refs.chef.value;
    recipe.preparation = this.refs.preparation.value;
    recipe.category = "pastas";
    var $this = this;
    recipe.ingredients = Array.from(Array(10).keys()).map((e,i)=>{
      let name = "name"+i;
      let value_name = $this.refs["ingredientName" + i].value;
      let amount = "amount"+i;
      let value_amount = $this.refs["ingredientAmount" + i].value;
      return {[name] : value_name, [amount] : value_amount}
    }
    );
    recipeStore.addRecipe(recipe);
    this.props.history.pushState(null, '/');

  }



  render() {

    const ingredients = Array.from(Array(10).keys()).map((e,i)=>
      <div class="row" key={i}>
        <div class="input-field col s2">
          <input placeholder="Name" id={`ingredientName${i}`} ref={`ingredientName${i}`} type="text" class="validate"/>
        </div>
        <div class="input-field col s2">
          <input placeholder="Amount" id={`amount${i}`} ref={`ingredientAmount${i}`} type="text" class="validate"/>
        </div>
      </div>
    );

    var recipe = {};

    return (
      <div class="col s12">
        <div class="card-panel brown lighten-5">
          <form onSubmit={this.saveRecipe.bind(this,recipe)}>
            <div class="row">
              <div class="input-field col s6">
                <input placeholder="Recipe name" type="text" class="validate" ref="name"/>
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
