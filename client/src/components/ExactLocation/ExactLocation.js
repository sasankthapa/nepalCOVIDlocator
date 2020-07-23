import React, { Component } from 'react'

import NepalMap from '../Visual/Map/NepalMap'
import InformationCenter from './InformationCenter/InformationCenter'

import classes from './ExactLocation.module.css'

export default class ExactLocation extends Component{
    
    state={
        position:[28.468664402097676,84.16637133707813],
        zoom:window.innerWidth>900?7:6,
        currentHospital:null,
        showHospital:false,
        geojsonHide:null
    }

    updateHospitalHandler(hospital){
        if(hospital===null){
            return this.setState({currentHospital:null})
        }
        this.setState({currentHospital:hospital});
    }

    selectHospitalHandler(value){
        this.setState({showHospital:value})
    }

    geojsonClickHandler=(name)=>{
        if(this.state.geojsonHide && this.state.geojsonHide===name) 
            return this.setState({geojsonHide:null})
        this.setState({geojsonHide:name})
    }

    render(){
        return(
            <div className={classes.container}>
                <div className={classes.flexContainer}>
                    <NepalMap position={this.state.position}
                        zoom={this.state.zoom}
                        settings={{
                            className:classes.Map,
                            minZoom:6,
                            zoomControl:false,
                        }}
                        showTiles
                        showMarkers
                        updateHospitalHandler={this.updateHospitalHandler.bind(this)}
                        showHospital={this.state.showHospital}
                        geojsonHide={this.state.geojsonHide}
                        geojsonClickHandler={this.geojsonClickHandler.bind(this)}
                    />
                </div>
                <div className={classes.flexContainer}>
                    <InformationCenter 
                        settings={{
                            className:classes.InfoContainer
                        }}
                        selectHospitalHandler={this.selectHospitalHandler.bind(this)}
                        updateHospitalHandler={this.updateHospitalHandler.bind(this)}
                        currentHospital={this.state.currentHospital} />
                </div>
            </div>
        )
    }
}