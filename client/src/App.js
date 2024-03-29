import React, {useState} from 'react';

import Header from './components/Header/header'

import 'leaflet/dist/leaflet.css'
import './App.css';
import { Switch, Route } from 'react-router-dom';

import ExactLocation from './components/ExactLocation/ExactLocation'
import Visual from './components/Visual/Visual'

import {loadDataDefaultPage,loadDataVisualPage} from './APIs/getDataImp'
import InfoOverlay from './components/InfoOverlay/InfoOverlaw';

function App() {
  const [mainPage, updateMain]=useState(false)
  const [visualPage, updateVisual]=useState(false);

  loadDataDefaultPage(updateMain);
  loadDataVisualPage(updateVisual);

    return (
        <div className="App">
            <Header />
            <InfoOverlay/>
            <div id="wrapper">
                <Switch>
                  <Route path='/visual'>
                    {visualPage?<Visual/>:'LOADING'}
                  </Route>
                  <Route path='/' exact>
                    {mainPage?<ExactLocation />:'LOADING'}
                  </Route>
                </Switch>
            </div>
          </div>
        );    
      
}

export default App;
