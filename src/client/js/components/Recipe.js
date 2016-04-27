import React from "react";
import {Link} from "react-router";
import {observer} from 'mobx-react';
import {getImageCategory} from "../util/Functions";

@observer
export default class Recipe extends React.Component {

  constructor(props, context){
    super(props, context);
    this.state = {recipe : props.recipe};
  }

  render() {

    let { id, name, category, description } = this.state.recipe;
    let imgCategory = getImageCategory(category);

    return (
      <div class="col s12 m4 l3 recipeCotainer" >
        <Link to={`/recipe/${id}`}>
          <div class="recipe hoverable">
            <div class="col s12" style={{height:"0px"}}>
              <img src={imgCategory} class="iconCategory"/>
            </div>
            <div class="col s12">
              <h4 class="center titleRecipe">{name}</h4>
              <br/>
              <p class="resume">{description} asd asdas dasd</p>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}
