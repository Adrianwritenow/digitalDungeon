import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SplashPage from './components/splashPage'
import Characters from './components/characters'
import ThankYou from './components/thankYou'
import Cast from './components/cast'


import Footer from './components/footer';
import Header from './components/header';

import './App.css';


class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={SplashPage}/>
              <Route exact path="/characters" component={Characters}/>
              <Route exact path="/cast" component={Cast}/>
              <Route exact path="/thankYou" component={ThankYou}/>
            </Switch>
          </BrowserRouter>
        <Footer />
      </div>
    );
  }
}

export default App;
