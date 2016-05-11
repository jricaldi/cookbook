import React from "react";
import {observer} from "mobx-react";
import {getCategories} from "../../calls/categories";
import {categoryStore} from "../../mobx/stores";

@observer
export default class CmbCategoria extends React.Component{

  constructor(){
    super();
    this.state = { list: []};
  }

  async componentDidMount(){
    const data = await getCategories();
    this.setState({list : data});
  }

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
        <select class="icons" ref="category" id="cmbCateoria">
          <option value="all">all</option>
          {this.state.list.map(
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
