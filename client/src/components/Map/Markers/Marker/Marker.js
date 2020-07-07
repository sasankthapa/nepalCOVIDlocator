import React from 'react'
import { Marker, Popup } from 'react-leaflet'

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

const marker = (props) => {
    return  (
        <Marker position={props.position} icon={props.message?messageIcon:noMessageIcon}>
          {props.message?<Popup>{props.message}</Popup>:''}
        </Marker>
    )
}

export default marker