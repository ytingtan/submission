import React from 'react'
import {  BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './pages/Cart';
import Home from './pages/Home';
import HeaderNew from './components/HeaderNew';
import ProductsList from './pages/ProductsList';
import ProductDetails from './pages/ProductDetails';

const Routing = () => {
  return (
    
    <BrowserRouter>
      <HeaderNew />
      <Routes>
      <Route
            path="/" 
            element= { <Home/> } 
        />
        <Route
            path="/products" 
            element= { <ProductsList/> } 
        />
        <Route
            path="/products/:id" 
            element= { <ProductDetails/> } 
        />
        <Route 
            path="/cart" 
            element={ <Cart/> } 
        />
        <Route 
            path="/details" 
            element={ <ProductDetails/> } 
        />
      </Routes>

    </BrowserRouter>
  );
}

export default Routing;