import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Router >
        <Header />
        <Footer />

        
      </Router>
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          See my murals and graffiti below!
        </a>
      </header>
    </div>
  );
}

export default App;
