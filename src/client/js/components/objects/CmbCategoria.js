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
    const { category } = this.refs;
    $(category).material_select();
    $(category).prev().children("li").on("click",(e)=>{
      let span = $(e.target).html();
      // $(category).val(span).change();
      categoryStore.category = span.toUpperCase();
    });


    // let list = [];
    const data = await getCategories();

    // .then((data)=>{
      console.log(data);
      let list =  data.map(
        (category,i)=>
          <option key={i} value={category}
            data-icon={`../../../img/categories/${category}.png`}
            class="left circle responsive-img"
            >{category}</option>
        )

      this.setState({list : list});
      // }
    // );
  }

  render(){
    console.log(this.state.list);
    const test = this.state.list;
    return(
      <div>
        <select class="icons browser-default" ref="category" id="cmbCateoria">
          <option>All</option>
          {test}
        </select>
      </div>
    )
  }
}
