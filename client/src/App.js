import React from 'react';

import Header from './components/Header/header'

import 'leaflet/dist/leaflet.css'
import './App.css';
import { Switch, Route } from 'react-router-dom';

import ExactLocation from './components/ExactLocation/ExactLocation'
import Visual from './components/Visual/Visual'
import Info from './components/InfoPage/Info'

function App() {

  return (
<div className="App">
      <Header />
      <div id="wrapper">
          <Switch>
            <Route path='/visual'>
              <Visual/>
            </Route>
            <Route path='/info'>
              <Info/>
            </Route>
            <Route path='/' exact>
              <ExactLocation />
            </Route>
          </Switch>
      </div>
    </div>
  );
}

export default App;
