import logo from './logo.svg';
import './css/App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from './components/Home';
import Blog from './components/Blog';
import Header from './components/includes/Header';


function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <Header></Header>
        </header>
        <Routes>
          <Route exact path='/' element={< Home />}></Route>
          <Route exact path='/blog' element={< Blog />}></Route>
        </Routes>

      </div>
    </Router>
  );
}

export default App;
