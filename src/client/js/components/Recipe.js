import React from "react";

export default class Recipe extends React.Component {
  render() {
    const { recipeName } = this.props;
    console.log(this.props);
    return (
      <div class="col s12">
        <h4>{recipeName}</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe rem nisi accusamus error velit animi non ipsa placeat. Recusandae, suscipit, soluta quibusdam accusamus a veniam quaerat eveniet eligendi dolor consectetur.</p>
        <a class="btn btn-default" href="#">More Info</a>
      </div>
    );
  }
}
