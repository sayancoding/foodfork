import React, { Component } from 'react'
import './App.css';
import Home from './components/Home/home'
import Details from './components/Details/details'
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'





export class App extends Component {

  render() {
    return (
      <Router>
      <div className="App">
        <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/ingredient/:id" exact component={Details} />
        </Switch>
      </div>
      </Router>
    )
  }
}

export default App

