import React from "react";
import {observer} from 'mobx-react';

@observer
export default class NewRecipe extends React.Component {

  render() {

    return (
      <div class="col s12">
        <div class="card-panel brown lighten-5">
          <form>
            <div class="row">
              <div class="input-field col s6">
                <input placeholder="Write a recipe name" id="name" type="text" class="validate"/>
                <label for="name">Recipe name</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s6">
                <input placeholder="Write a description" id="description" type="text" class="validate"/>
                <label for="description">Description</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s6">
                <input placeholder="Write the chef's name" id="chef" type="text" class="validate"/>
                <label for="chef">Chef</label>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
