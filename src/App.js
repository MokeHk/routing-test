import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from "./components/navbar";
// import Products from "./components/Products";
// import Posts from "./components/posts";
// import ProductDetails from "./components/productDetails";
import Home from "./components/home";
import Dashboard from "./components/dashboard";
import NotFound from "./components/notFound";
import "./App.css";
console.log(Home)
class App extends Component {


  render() { 
    return (
      <main>
        <NavBar />
        <div className='content'>
          <Routes>

          <Route path="/admin" exact element={<Dashboard />} />
          <Route path="/not-found" element={<NotFound />} />
          <Route path="/" element={<Home />} />

          </Routes>
          </div>
      </main>
    );
  }
}
 
export default App;