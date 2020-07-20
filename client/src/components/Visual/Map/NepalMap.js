import React from 'react';
import { Map, ZoomControl } from 'react-leaflet';
import Portal from 'react-leaflet-portal'

import SelectedDistrict from './ControlLayer/SelectedDistrict'
import Legend from './ControlLayer/Legend'
import NepalGeoJSON from './GeoJSON/NepalGeoJSON'

const nepalMap = (props) => {
    const DEVondragend= (e) => {
        console.log(e.target.getCenter())
        console.log(e.target._zoom);
    }

    const districtInfoPortal=props.current?(
        <SelectedDistrict current={props.current} sortedBy={props.sortedBy} closeHandler={props.clickHandler}/>):'';
    
    return (
        <Map center={props.position} zoom={props.zoom} 
            ondragend={DEVondragend}
            {...props.settings}
            {...props.inlineS}
            >
            <NepalGeoJSON clickHandler={props.clickHandler} current={props.current} sortedBy={props.sortedBy}/>
            <ZoomControl position="bottomright" zoomInText=" + " zoomOutText=" - "/>
            <Portal position="topright">
            {districtInfoPortal}
            </Portal>
            <Portal position="bottomleft">
                <Legend showLegend={props.showLegend} sortedBy={props.sortedBy} legendHandler={props.legendHandler}/>
            </Portal>
        </Map>
    )
}

export default nepalMap
//https://www.youtube.com/watch?v=DnvhWAx2I7A