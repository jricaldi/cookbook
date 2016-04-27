import React from "react";


export default class BtnNewRecipe extends React.Component{
  render(){
    return(
      <div class="fixed-action-btn" class="btnNewRecipe">
        <a class="btn-floating btn-large red">
          <i class="large material-icons">mode_edit</i>
        </a>
      </div>
    )
  }
}
