import React from 'react'
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Page from './components/Page';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './components/Signup';

function App() {
  return (
    <>
     {/* <div className="App">
   <Header/>
   <Page/>
   <Footer/>
   </div> */}
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route path="/cars" element={<Page/>}></Route>
      <Route path="/Signup" element={<SignUp/> }></Route>
    </Routes>
    <Footer/>
  </BrowserRouter>
  </>
  );
}

export default App;
