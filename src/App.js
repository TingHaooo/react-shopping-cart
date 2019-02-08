import React, { Component } from 'react';
import './App.scss';
import Header from './components/Header'
import Banner from './components/Banner'
import Footer from './components/Footer'
import Filter from './components/shelf/Filter'
import Products from './components/shelf/Products'
import Cart from './components/cart/Cart'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Banner />
        <div className="l-wrap">
          <Filter />
          <Products />
        </div>
        <Cart />
        <Footer />
      </div>
    );
  }
}

export default App;
