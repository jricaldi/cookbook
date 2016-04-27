import React from "react"


export default class Header extends React.Component{
  render(){
    return(
      <header class="col s12 center">
        <div class="col s12">
          <div class="col s3">&nbsp;</div>
          <div class="col s6">
            <img src="./img/logo.png" class="mt10 responsive-img"/>
          </div>
          <div class="col s3">&nbsp;</div>

        </div>
        <div class="col s12">
          <h1 class="title">Avantica CookBook</h1>
        </div>
      </header>
    );
  }
}
