import React from "react";
import {observer} from 'mobx-react';
import {recipeStore} from "../mobx/stores";

@observer
export default class ListLastRecipes extends React.Component{


  render(){
    let list = recipeStore.lastRecipes.map((recipe,i)=>
      <li key={i}>
        <span>- {recipe.name}</span>
      </li>
    );

    return(
      <div>
        <div class="col s12">
          <h5>Last Recipes:</h5>
        </div>
        <div class="col s12">
          <ul>
          {list}
          </ul>
        </div>
      </div>
    );
  }
}
