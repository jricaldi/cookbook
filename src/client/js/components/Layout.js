import React from "react";
import {observer} from 'mobx-react';

import Search from "./Search";
import Footer from "./common/Footer";
import Header from "./common/Header";
import ListLastRecipes from "./ListLastRecipes";
import CmbCategoria from "./objects/CmbCategoria";
import BtnNewRecipe from "./objects/BtnNewRecipe";

@observer
export default class Layout extends React.Component {
  render() {

    return (
      <div class="container">
        <div class="row">
          <div class="col s12 m4 l4">
            <Header/>
            <ListLastRecipes/>
          </div>
          <main class="col s12 m8 l8">
            <section class="col s12 mt30 center">
              <BtnNewRecipe/>
            </section>
            <section class="col s12 mt30">
              <div class="col l3">
                <CmbCategoria/>
              </div>
              <div class="col l9">
                <Search/>
              </div>
            </section>
            <section class="col s12">
                {this.props.children}
            </section>

          </main>
        </div>
      </div>
    );
  }
}
