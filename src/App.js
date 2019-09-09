import React, { Component } from 'react'
import BannerText from './components/BannerText/BannerText'
import './App.css';
import Listing from './components/Listing/Listing'
import LayoutLists from './components/Layout/LayoutLists'

const API_KEY = '25bec5831c7c295514d09b0a2e2ed89d';

export class App extends Component {
  
  state={
    recipes:[],
    display:true
  }

  getData =async (e) =>{
    const inputData = e.target.elements.food.value;
    e.preventDefault();
    const api_call = await fetch(
      `https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=${API_KEY}&q=${inputData}&count=21`);
    const data = await api_call.json();
    this.setState({recipes:data.recipes,display:true})
    console.log(data)
  }

  render() {
    let listing = <p>Loading...</p>
    if(this.state.display){
      listing = (
        this.state.recipes.map(recipe => {
          return (
            <Listing
              img_url={recipe.image_url}
              title={recipe.title}
              publisher={recipe.publisher}
            />
          )
        })
      )
    }
    return (
      <div className="App">
        <BannerText getData={this.getData}/>

        <LayoutLists>
        {listing}
        </LayoutLists>

      </div>
    )
  }
}

export default App

