import React from "react";
import {observer} from "mobx-react";
import {getCategories} from "../../calls/categories";
import {categoryStore} from "../../mobx/stores";

@observer
export default class CmbCategoria extends React.Component{

  componentDidMount(){
    const { categoria } = this.refs;
    $(categoria).material_select();
    $(categoria).prev().children("li").on("click",(e)=>{
      let span = $(e.target).html();
      categoryStore.category = span.toUpperCase();
    });

  }

  render(){
    let list = getCategories().map(
      (category,i)=>
        <option key={i} value={category}
          data-icon={`../../../img/categories/${category}.png`}
          class="left circle"
          >{category}</option>
      );

    return(
      <div>
        <select class="icons" ref="categoria"
          id="cmbCateoria">
          <option value="none">Select a category</option>
          {list}
        </select>
      </div>
    )
  }
}
