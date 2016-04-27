import React from "react";
import {getCategories} from "../../calls/categories"

export default class CmbCategoria extends React.Component{

  componentDidMount(){
    const { categoria } = this.refs;
    $(categoria).material_select();
  }

  render(){
    let list = getCategories().map(
      (category)=>
        <option value={category} data-icon={`../../../img/categories/${category}.png`} class="left circle">{category}</option>
      );

    return(
      <div>
        <select class="icons" ref="categoria">
          {list}
        </select>
        <label>Images in select</label>
      </div>
    )
  }
}
