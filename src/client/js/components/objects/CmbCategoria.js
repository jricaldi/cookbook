import React from "react";
import {observer} from "mobx-react";
import {getCategories} from "../../calls/category";
import {categoryStore} from "../../mobx/stores";

@observer
export default class CmbCategoria extends React.Component{

  componentDidUpdate(){
    const { category } = this.refs;
    $(category).material_select();
    $(category).prev().children("li").on("click",(e)=>{
      let span = $(e.target).html();
      categoryStore.category = span.toUpperCase();
    });
  }

  render(){

    return(
      <div>
        <select class="icons" ref="category" id="cmbCategoria">
          <option value="all">all</option>
          {categoryStore.categories.map(
            (category,i)=>
              <option key={i} value={category}
                data-icon={`../../../img/categories/${category}.png`}
                class="left circle responsive-img"
                >{category}</option>
            )
          }
        </select>
      </div>
    )
  }
}
