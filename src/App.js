import React, { Component } from 'react'
import BannerText from './components/BannerText/BannerText'
import './App.css';
import Listing from './components/Listing/Listing'

const API_KEY = '25bec5831c7c295514d09b0a2e2ed89d';

export class App extends Component {
  
  getData =async (e) =>{
    const inputData = e.target.elements.food.value;
    e.preventDefault();
    const api_call = await fetch(
      `https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=${API_KEY}&q=chicken&count=2`);
    const data = await api_call.json();

    console.log(data.recipes[0])
  }

  render() {
    return (
      <div className="App">
        <BannerText getData={this.getData}/>
        {<Listing></Listing>}
      </div>
    )
  }
}

export default App

