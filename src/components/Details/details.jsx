import React, { Component } from "react";
import "./details.css";

const API_KEY = "d9c2e05db28c4f25baa480f2ce078f4e";
export default class details extends Component {
  state = {
    title: "",
    readyInMinutes: "",
    summary: "",
    dishTypes: [],
    ingredients: [],
    display: false,
    key: "",
    img_url: "",
  };
  getData = async () => {
    this.setState({ display: true });
    const api_call = await fetch(
      `https://api.spoonacular.com/recipes/${this.props.match.params.id}/information?apiKey=${API_KEY}&includeNutrition=false`
    );
    const data = await api_call.json();
    this.setState({
      title: data.title,
      // summary:data.summary,
      readyInMinutes: data.readyInMinutes,
      dishTypes: data.dishTypes,
      ingredients: data.extendedIngredients,
      id: data.id,
      img_url: data.image,
      display: false,
    });
    console.log(data);
  };
  componentDidMount() {
    this.getData();
    console.log(this.props.match.params.id);
  }
  render() {
    return (
      <div>
        <div className="detail_container">
          <div className="header">
            <img className="head_img" src={this.state.img_url} alt="image" />
            <div className="header_text">
              <div className="title">{this.state.title}</div>
              <div className="summary">
                Ready in Minutes : {this.state.readyInMinutes}
              </div>
              <div className="dishTypes">
                {this.state.dishTypes.map((e) => {
                  return <p>#{e}</p>;
                })}
              </div>
            </div>
          </div>

          <div className="ingredient">
            <h2>Ingredients</h2>
            {
              this.state.ingredients.map(el=>{
                return(
                <div>{el.name} {el.amount} {el.unit}</div>
                )
              })
            }
          </div>

        </div>
      </div>
    );
  }
}
