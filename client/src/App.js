import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './css/App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Main from './components/Main';
import Blog from './components/Blog';
import Header from './components/includes/Header';


function App() {

  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch("http://localhost:5000/api").then(
      response => response.json()
    ).then(
      data => setBackendData(data)
    )
  }, [])

  document.title = "Mathéo LEGER - Portfolio"

  return (
    <Router>
      <div className="App">
        <header>
          <Header></Header>
        </header>
        <Routes>
          <Route exact path='/' element={< Main />}></Route>
          <Route exact path='/blog' element={< Blog />}></Route>
        </Routes>

      </div>
    </Router>
  );
}

export default App;
