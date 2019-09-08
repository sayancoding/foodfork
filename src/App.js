import React, { Component } from 'react'
import BannerText from './components/BannerText/BannerText'
import './App.css';
import Listing from './components/Listing/Listing'
import LayoutLists from './components/Layout/LayoutLists'

const API_KEY = '25bec5831c7c295514d09b0a2e2ed89d';

export class App extends Component {
  
  state={
    recipes:[],
  }

  getData =async (e) =>{
    const inputData = e.target.elements.food.value;
    e.preventDefault();
    // const api_call = await fetch(
    //   `https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=${API_KEY}&q=${inputData}&count=4`);
    // const data = await api_call.json();
    this.setState({recipes:data.recipes})
    console.log(data)
  }

  render() {
    return (
      <div className="App">
        <BannerText getData={this.getData}/>
        
        {/* {this.state.recipes.map(recipe=>{
          return(
            <Listing img_url={recipe.image_url}>{recipe.title}</Listing>
          )
        })} */}
      </div>
    )
  }
}

export default App

