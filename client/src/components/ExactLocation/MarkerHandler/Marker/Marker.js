import React from 'react'
import { Marker, Popup } from 'react-leaflet'
import hospitalIconRAW from '../../../../assets/hospital_marker.png';

import classes from './Popup.css'
const L=require('leaflet')

var noMessageIcon = L.icon({
  iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png",
  iconSize: [25, 41],
  iconAnchor: [12.5, 41],
  popupAnchor: [0, -41],
});

var messageIcon= L.icon({
  iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-gold.png",
  iconSize: [25, 41],
  iconAnchor: [12.5, 41],
  popupAnchor: [0, -41],
});

var hospitalIcon= L.icon({
    iconUrl: hospitalIconRAW,
    iconSize: [840/32, 1060/32],
    iconAnchor: [840/(32*2), 1060/32-2],
    popupAnchor: [0, -(1060/32)],
  });

const marker = (props) => {
  console.log(props.message);
    return  (
        <Marker position={props.position} icon={hospitalIcon}>
              {props.message?
              <Popup className="HospitalInfo">
                {props.message}</Popup>
              :''}
            </Marker>
    )
}

export default marker