import React from 'react';
import { Map, ZoomControl, TileLayer } from 'react-leaflet';
import Portal from 'react-leaflet-portal'

import SelectedDistrict from './ControlLayer/SelectedDistrict'
import Legend from './ControlLayer/Legend'
import NepalGeoJSON from './GeoJSON/NepalGeoJSON'
import MarkerHandler from '../../ExactLocation/MarkerHandler/MarkerHandler';

const nepalMap = (props) => {
    const DEVondragend= (e) => {
        console.log(e.target.getCenter())
        console.log(e.target._zoom);
    }

    const districtInfoPortal=props.current?(
        <SelectedDistrict current={props.current} sortedBy={props.sortedBy} closeHandler={props.clickHandler}/>):'';
    
    console.log(props.showMarkers)
    return (
        <Map center={props.position} zoom={props.zoom} 
            ondragend={DEVondragend}
            {...props.settings}
            {...props.inlineS}
            >
            {props.showTiles?<TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                /> : ''}
            <NepalGeoJSON clickHandler={props.clickHandler} current={props.current} sortedBy={props.sortedBy} 
                showTiles={props.showTiles} geojsonHide={props.geojsonHide} geojsonClickHandler={props.geojsonClickHandler}/>
            <ZoomControl position="bottomright" zoomInText=" + " zoomOutText=" - "/>
            <Portal position="topright">
            {districtInfoPortal}
            </Portal>
            <Portal position="bottomleft">
                {props.showTiles?'':<Legend showLegend={props.showLegend} sortedBy={props.sortedBy} legendHandler={props.legendHandler}/>}
            </Portal>
            {props.showMarkers? <MarkerHandler hospital={props.showHospital} updateHospitalHandler={props.updateHospitalHandler}/> : ''}
        </Map>
    )
}

export default nepalMap
//https://www.youtube.com/watch?v=DnvhWAx2I7A