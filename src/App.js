import React, { useEffect, useState } from 'react'
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Page from './components/Page';

function App() {
  return (
    <div className="App">
   <Header/>
   <Page/>
   <Footer/>
    </div>
  );
}

export default App;
