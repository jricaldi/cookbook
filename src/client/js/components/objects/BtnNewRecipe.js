import React from "react";
import {Link} from "react-router";

export default class BtnNewRecipe extends React.Component{
  render(){
    return(
      <div>
        <Link to="/newRecipe" class="waves-effect waves-light btn-large green darken-2 borderCool2">Add Recipe</Link>
      </div>
    )
  }
}
