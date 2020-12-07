import React, { Component } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from './components/Navbar'
import Default from './components/Default'
import Details from './components/Details'
import Product from './components/Product'
import ProductList from './components/ProductList'
import Cart from './components/Cart/Cart'
import Model from './components/Model'
import { Switch,Route } from 'react-router-dom'

class App extends Component{
  render(){
    return (
      <>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route exact path="/details" component={Details} />
          <Route exact path="/cart" component={Cart} />
          <Route exact component={Default}/>
        </Switch>
        <Model />
      </>
    )
  }
}

export default App;
