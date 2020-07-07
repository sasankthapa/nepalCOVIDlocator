import React, { useState } from 'react';

import Header from './components/Header/header'
import Map from './components/Map/Map';
import FormElements from './components/FormElements/FormElements';

import { sendForm } from './APIs/axios.js'
import 'leaflet/dist/leaflet.css'
import './App.css';

function App() {
  const [curr,setLatLong]= useState({
    lat:27,
    long:85,
    zoom:5,
    fillingForm:false
  })

  const submitFormRequest=(formData)=>{
    const latlng={
      ...curr
    }
    delete latlng.zoom
    delete latlng.fillingForm

    formData={
      ...formData,
      ...latlng
    }
    console.log(formData);

    sendForm(formData);
  }
  //<h1>नेपाल COVID लोकेतोर।</h1>

  return (
    <div className="App">
      <Header />
      <div id="wrapper">
        <Map lat={curr.lat} long={curr.long} zoom={curr.zoom} fillingForm={curr.fillingForm} DEVupdatePos={setLatLong}/>
        <FormElements updateLatLong={setLatLong} submitForm={submitFormRequest}/>
      </div>
    </div>
  );
}

export default App;
