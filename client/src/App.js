import React, {useState} from 'react';

import Header from './components/Header/header'

import 'leaflet/dist/leaflet.css'
import './App.css';
import { Switch, Route } from 'react-router-dom';

import ExactLocation from './components/ExactLocation/ExactLocation'
import Visual from './components/Visual/Visual'
import News from './components/NewsPage/News2'

import {loadDataDefaultPage,loadDataVisualPage,loadDataNewsPage} from './APIs/getDataImp'

function App() {
  const [mainPage, updateMain]=useState(false)
  const [visualPage, updateVisual]=useState(false);
  const [newsPage, updateNews]=useState(false);

  loadDataDefaultPage(updateMain);
  loadDataVisualPage(updateVisual);
  loadDataNewsPage(updateNews);

    return (
        <div className="App">
            <Header />
            <div id="wrapper">
                <Switch>
                  <Route path='/visual'>
                    {visualPage?<Visual/>:'LOADING'}
                  </Route>
                  <Route path='/news'>
                    {newsPage?<News/>:'LOADING'}
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
