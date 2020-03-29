import React, { Fragment } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CardComponent } from './components/CardComponent';

function App() {
  return (
    <Router>
      
      <div className="App">
        <Header />

        <CardComponent />

        <Footer />
      </div>

    </Router>

  );
}

export default App;
