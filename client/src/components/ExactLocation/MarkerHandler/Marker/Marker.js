import React from 'react'
import { Marker, Popup } from 'react-leaflet'
import hospitalIconRAW from '../../../../assets/hospital_marker.png';

import './Popup.css'
const L=require('leaflet')

var hospitalIcon= L.icon({
    iconUrl: hospitalIconRAW,
    iconSize: [840/32, 1060/32],
    iconAnchor: [840/(32*2), 1060/32-2],
    popupAnchor: [0, -(1060/32)],
  });

const marker = (props) => {
    return  (
        <Marker position={props.position} icon={hospitalIcon} current={props.current} onclick={(e)=>props.updateHospitalHandler(e.target.options.current)}>
              {props.message?
              <Popup className="HospitalInfo">
                {props.message}</Popup>
              :''}
            </Marker>
    )
}

export default marker