import React from "react";
import {observer} from 'mobx-react';
import { recipeStore } from '../mobx/stores';

@observer
export default class Search extends React.Component {

  search(e){
    recipeStore.searchTerm(e.target.value);
  }

  render() {
    return (
        <input id="search" class="search"
          type="search"
          onKeyUp={this.search.bind(this)}
          placeholder="Find a recipe here!"
          />
    );
  }
}
