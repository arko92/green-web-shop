import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// services
import HttpService from '../services/http-service';  // This service makes web requests for the APP

// components
import Product from '../product/product';
import WishList from '../wishlist/wishlist';

// creating http service

const http = new HttpService(); // Creating an instance of our http service. This  let the app make web request for mongo db database

class App extends Component { // Creating a react component 'App' by extending an react defined 'Component' class

  constructor(props){
    super(props);
    this.state = {products:[]}  // state is an object that holds different properties for the component i.e. 'App'

    // Bind functions --> We have to bind every functions we create
    this.loadData = this.loadData.bind(this)
    this.productList = this.productList.bind(this)

    // calling function
    this.loadData();
  }
  //ES6 format. Creating a function to load data from the mongodb database
  loadData = () => {
    var self = this; // making a reference to the component because inside a promise we cant use 'this'
    http.getProducts()
    .then(data => {    // data --> an array of products  
      self.setState({products:data})   //If we want to refresh use setState --> to be understand in depth later
      //console.log(products)
    })
    .catch(err =>{
      console.log(err.message)
    })

  }

  // Creating a function that returns a list of products in ES6 format
  productList = () => {
    const list = this.state.products.map((product) => // map is a javascript function that goes through every element in an array
      <div className='col-sm-4' key={product._id}>
        {/* getting data from mongodb database collection */}
        <Product product={product}></Product>  
        {/* Note here 'product' is the property i.e. props of the component Product */}
      </div>
    ) 
    return (list)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className='px-auto'>
            <h1>Welcome to the green shop</h1>
          </div>
        </header>
        <div className="container-fluid App-main">
          <div className='row'>
         {/* Note here price, title and imgUrl are the props (i.e. properties) of the component 'Product' */}
            <div className='col-sm-8'> 
              <div className='row'>
                <h3 className='text-right pb-3'>Which technology will drive the future mobility?</h3>
              </div>
              <div className='row'>
                {this.productList()}

              </div>
            </div>
            <div className='col-sm-4'>
              <WishList></WishList>
            </div>
              
          </div>
         </div>
      </div>
    );
  }

}



export default App;
