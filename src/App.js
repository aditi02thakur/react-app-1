import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import About from './components/pages/About';
import Cards from './components/Cards';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';

function App() {
  return (
    <>
      <Router>

        <Navbar />
        <Switch>
        <Route path='/about' exact component={About} />
          <Route path='/services' component={Services} />
          <Route path='/' exact component={Home} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} />
        </Switch>
        <HeroSection/>
        <Cards/>
        <Footer/>
      </Router>
    </>
  );
}

export default App;