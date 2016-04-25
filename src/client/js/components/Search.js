import React from "react";
import {observer} from 'mobx-react';
import {getRecipeTerms} from "../calls/recipe"
import { recipeStore } from '../mobx/stores';

@observer
export default class Search extends React.Component {

  // search(e){
  //   let term = e.target.value
  //
  //   e.preventDefault();
  //   if(term.length > 2)
  //     recipeStore.searchTerm(term);
  // }

  search = (event) =>{
    	event.preventDefault();

      let term = event.target.value
      if(term.length > 2)
        recipeStore.searchTerm(term);

  }

  render() {
    return (
      <section>
        <input id="search" class="search"
          type="search"
          onKeyUp={this.search}
          placeholder="Find a recipe here!"
          autoFocus={true}
          />
      </section>
    );
  }
}
