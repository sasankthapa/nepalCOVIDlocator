import React, { Component } from 'react';
import { Map, TileLayer } from 'react-leaflet';
import Portal from 'react-leaflet-portal'

import GeoJSONs from './GeoJSONs/GeoJSONs'
import DistrictInfo from './PortalLayers/DistrictInfo'
import Marker from './Markers/Marker/Marker'
import Markers from './Markers/Markers'

import './Map.css'

import {getEntries} from '../../APIs/axios'
import { updateNumberOfCases } from '../../HelperFunctions/findDistrict'
import { findDistrict } from '../../HelperFunctions/findDistrict'

export default class MainMap extends Component{
    state={
        feature:{},
        entries:[]
    }

    devLatLong={    
        lat:this.props.lat,
        long:this.props.long
    }

    DEVonDragEndHandler=(e)=>{
        var latlng=e.target.getCenter()
        console.log(findDistrict(latlng.lat,latlng.lng))
        this.props.DEVupdatePos({lat:latlng.lat,long:latlng.lng,fillingForm:true,zoom:10})
    }

    updateCurrentFeature(feature){
        this.setState({feature})
    }

    render(){
        const position=[this.props.lat, this.props.long];
        return (
            <Map center={position} zoom={this.props.zoom} className="Map">
                <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />   
                <GeoJSONs currentFeature={this.state.feature} updateStateInMaps={this.updateCurrentFeature.bind(this)}/>
                {this.props.fillingForm ? <Marker position={position}/>:''}
                <Markers entries={this.state.entries} />
                <Portal position="bottomleft">
                    <DistrictInfo feature={this.state.feature}/>
                </Portal>
            </Map>
        );
    }

    componentDidMount(){
        //get request to get all the Marker locations... update the legend somehow?
        getEntries().then((entries)=>{
            if(!entries) return;
            entries=entries.data
            if(entries.length===0){
                alert('no cases have been reported');
            }else{
                updateNumberOfCases(entries);
            }
            this.setState({entries})
        }).catch((e)=>console.log(e));
    }
}