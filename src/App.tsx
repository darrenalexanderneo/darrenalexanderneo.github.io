import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Features from './components/features/Features';
import Portfolio from './components/portfolio/Portfolio';
import Experience from './components/experience/Experience';
import Blog from './components/blog/Blog';
import Contact from './components/contact/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Features/>
      <Portfolio/>
      <Experience/>
      <Blog/>
      <Footer/>
    </div>
  );
}

export default App;
