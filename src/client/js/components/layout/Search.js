import React from "react";
import {getRecipeTerms} from "../../calls/recipe"

export default class Search extends React.Component {

  constructor(){
    super();
    this.constructor.childContextTypes = {
      listRecipe: React.PropTypes.array
    }
    this.state = {listRecipe :[]}
  }

  getChildContext() {
    return {
      listRecipe: this.state.listRecipe
    }
  }

  search(e){
    let term = e.target.value
    if(term.length > 2)
      this.setState({listRecipe : getRecipeTerms(term)});
  }

  render() {
    console.log(this.state.listRecipe);
    return (
      <section>
        <input id="search" class="search"
          type="search"
          onKeyUp={this.search.bind(this)}
          placeholder="Find a recipe here!"
          />
      </section>
    );
  }
}
