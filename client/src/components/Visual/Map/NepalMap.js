import React from 'react';
import { Map, ZoomControl, TileLayer } from 'react-leaflet';
import Portal from 'react-leaflet-portal'

import SelectedDistrict from './ControlLayer/SelectedDistrict'
import Legend from './ControlLayer/Legend'
import NepalGeoJSON from './GeoJSON/NepalGeoJSON'
import MarkerHandler from '../../ExactLocation/MarkerHandler/MarkerHandler';

const nepalMap = (props) => {
    const districtInfoPortal=props.current?(
        <SelectedDistrict current={props.current} sortedBy={props.sortedBy} closeHandler={props.clickHandler}/>):
        props.geojsonHide?<div style={{fontSize:'20px',backgroundColor:'white',borderRadius:'10px',margin:'0'}}><h3 style={{margin:'0'}}>--{props.geojsonHide}--</h3></div>:'';
    return (
        <Map center={props.position} zoom={props.zoom} 
            {...props.settings}
            {...props.inlineS}
            key={props.updateKey}
            >
            {props.showTiles?<TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                /> : ''}
            <NepalGeoJSON updateKey={props.updateKey} clickHandler={props.clickHandler} current={props.current} sortedBy={props.sortedBy} 
                showTiles={props.showTiles} geojsonHide={props.geojsonHide} geojsonClickHandler={props.geojsonClickHandler}/>
            <ZoomControl position="bottomright" zoomInText=" + " zoomOutText=" - "/>
            <Portal position="topright">
            {districtInfoPortal}
            </Portal>
            <Portal position="bottomleft">
                {props.showTiles?<button onClick={(e)=>props.biggermapHandler()}>+</button>:<Legend showLegend={props.showLegend} sortedBy={props.sortedBy} legendHandler={props.legendHandler}/>}
            </Portal>
            {props.showMarkers? <MarkerHandler casesStart={props.casesStart} allcases={props.showAllCases} hospital={props.showHospital} updateHospitalHandler={props.updateHospitalHandler}/> : ''}
        </Map>
    )
}

export default nepalMap
//https://www.youtube.com/watch?v=DnvhWAx2I7A