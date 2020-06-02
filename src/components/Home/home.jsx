import React, { Component } from "react";
import BannerText from "../../components/BannerText/BannerText";

import Listing from "../../components/Listing/Listing";
import LayoutLists from "../../components/Layout/LayoutLists";
import Spinner from "../../components/UI/Spinner/Spinner";


const API_KEY = "d9c2e05db28c4f25baa480f2ce078f4e";

export default class home extends Component {
  state = {
    recipes: [],
    display: false,
  };

  getData = async (e) => {
    this.setState({ display: true });
    const inputData = e.target.elements.food.value;
    e.preventDefault();
    const api_call = await fetch(
      `https://api.spoonacular.com/recipes/search?apiKey=${API_KEY}&query=${inputData}`
    );
    const data = await api_call.json();
    this.setState({ recipes: data.results, display: false });
    console.log(this.state.recipes);
  };

  render() {
    return (
      <div>
        <BannerText getData={this.getData} />

        <LayoutLists>
          {this.state.display && <Spinner />}
          {!this.state.display &&
            this.state.recipes.map((recipe) => {
              return (
                <Listing
                  img_url={`https://spoonacular.com/recipeImages/${recipe.image}`}
                  title={
                    recipe.title.length > 25
                      ? `${recipe.title.slice(0, 24)}...`
                      : recipe.title
                  }
                  readyInMinutes={recipe.readyInMinutes}
                  id={recipe.id}
                />
              );
            })}
        </LayoutLists>
      </div>
    );
  }
}
