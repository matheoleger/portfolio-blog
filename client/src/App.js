import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './css/App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Main from './components/Main';
import Blog from './components/Blog';
import CurriculumVitae from './components/main-content/CurriculumVitae'
import AboutMe from './components/main-content/AboutMe'
import Competences from "./components/main-content/Competences";
import Experiences from "./components/main-content/Experiences";
import Formation from "./components/main-content/Formation";
import Header from './components/includes/Header';
import Post from "./components/blog-content/Post"
import Entreprise from './components/main-content/Company';


function App() {

  document.title = "Mathéo LEGER - Portfolio"

  return (
    <Router>
      <div className="App">
        <header>
          <Header></Header>
        </header>
        <Routes>
          <Route exact path='/' element={< Main />}></Route>
          <Route exact path='/cv' element={< CurriculumVitae />}></Route>
          <Route exact path='/aboutme' element={< AboutMe />}></Route>
          <Route exact path='/competences' element={< Competences />}></Route>
          <Route exact path='/companies/:name' element={< Entreprise />}></Route>
          <Route exact path='/experiences' element={< Experiences />}></Route>
          <Route exact path='/formation' element={< Formation />}></Route>
          <Route exact path='/blog' element={< Blog />}></Route>
          <Route exact path='/blog/posts/:post' element={< Post />}></Route>
        </Routes>

      </div>
    </Router>
  );
}

export default App;
