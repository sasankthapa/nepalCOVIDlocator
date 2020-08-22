import React from 'react'
import { Marker, Popup } from 'react-leaflet'
import hospitalIconRAW from '../../../../assets/hospital_marker.png';
import covidIconRAW from '../../../../assets/covidimage.png'

import './Popup.css'
const L=require('leaflet')

var hospitalIcon= L.icon({
    iconUrl: hospitalIconRAW,
    iconSize: [840/32, 1060/32],
    iconAnchor: [840/(32*2), 1060/32-2],
    popupAnchor: [0, -(1060/32)],
  });

var covidIcon= L.icon({
  iconUrl: covidIconRAW,
  iconSize:[910/32,946/32],
  iconAnchor: [910/(32*2), 946/(32*2)]
})

const marker = (props) => {
    return  (
        <Marker position={props.position} icon={props.icon==='hospital'?hospitalIcon:covidIcon} current={props.current} onclick={(e)=>props.updateHospitalHandler(e.target.options.current)}>
              {props.message?
              <Popup className="HospitalInfo">
                {props.message}</Popup>
              :''}
            </Marker>
    )
}

export default marker