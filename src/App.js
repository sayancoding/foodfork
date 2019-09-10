import React, { Component } from 'react'
import BannerText from './components/BannerText/BannerText'
import './App.css';
import Listing from './components/Listing/Listing'
import LayoutLists from './components/Layout/LayoutLists'
import Banner from './components/Banner/banner'


const API_KEY = '25bec5831c7c295514d09b0a2e2ed89d';


export class App extends Component {
  
  state={
    recipes:[],
    display:false
  }

  getData =async (e) =>{
    this.setState({display:true})
    const inputData = e.target.elements.food.value;
    e.preventDefault();
    const api_call = await fetch(
      `https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=${API_KEY}&q=${inputData}&count=21`);
    const data = await api_call.json();
    this.setState({recipes:data.recipes})
    console.log(data)
  }
  componentDidMount(){
    console.log(this.state.recipes.length)
  }

  render() {
    let listing = <Banner/>
    if(this.state.display)
    {
      if(this.state.recipes.length === 0 )
       {listing = <h3>Loading...</h3>}
       else{
        listing = (
          this.state.recipes.map(recipe => {
            return (
              <Listing
                img_url={recipe.image_url}
                title={(recipe.title).length > 25 ? `${recipe.title.slice(0, 24)}...` : recipe.title}
                publisher={recipe.publisher}
                linked={recipe.f2f_url}
              />
            )
          })
        )

       }
      
    }
    // if(this.state.recipes.length >= 1){
    //   listing = (
    //     this.state.recipes.map(recipe => {
    //       return (
    //         <Listing
    //           img_url={recipe.image_url}
    //           title={(recipe.title).length > 25 ? `${recipe.title.slice(0, 24)}...` : recipe.title}
    //           publisher={recipe.publisher}
    //           linked={recipe.f2f_url}
    //         />
    //       )
    //     })
    //   )
    // }
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

