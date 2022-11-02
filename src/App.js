import './App.css';
import { React, useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error from './components/Error'
import Home from './components/Home';
import Header from './components/Header';
import NavBar from './components/NavBar';
import SingleCategory from './components/SingleCategory'
import SingleReview from './components/SingleReview';

function App() {
  return (
    <BrowserRouter>
    <Header />
    <NavBar />
      <Routes>
        <Route path='/' element={<Home />} /> 
          <Route path='/reviews/:review_slug' element={<SingleReview />} />
          <Route path='/categories/:category_slug' element={<SingleCategory />} />
          <Route path='*' element={<Error/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
