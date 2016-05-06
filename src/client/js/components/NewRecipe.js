import React from "react";
import {observer} from 'mobx-react';

@observer
export default class NewRecipe extends React.Component {

  saveRecipe(event){
    event.preventDefault();
    console.log(event);
    console.log(this);
  }



  render() {

    const ingredients = [1,1,1,1,1,1,1,1,1,1].map((e,i)=>
      <div class="row" key={i}>
        <div class="input-field col s2">
          <input placeholder="Name" id={`ingredientName${i}`} type="text" class="validate"/>
        </div>
        <div class="input-field col s2">
          <input placeholder="Amount" id={`amount${i}`} type="text" class="validate"/>
        </div>
      </div>
    );

    return (
      <div class="col s12">
        <div class="card-panel brown lighten-5">
          <form onSubmit={this.saveRecipe.bind(this)}>
            <div class="row">
              <div class="input-field col s6">
                <input placeholder="Recipe name" name="name" id="name" type="text" class="validate"/>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s6">
                <input placeholder="Chef's name"  name="chef" id="chef" type="text" class="validate"/>
              </div>
            </div>
            <div class="row">
              <span>Ingredients (Add maximun 10 of them)</span>
              {ingredients}
            </div>
            <div class="row">
              <textarea name="preparation" id="preparation" class="materialize-textarea" length="120" placeholder="Preparation"></textarea>
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
