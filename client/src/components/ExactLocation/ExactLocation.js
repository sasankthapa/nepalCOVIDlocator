import React, { Component } from 'react'

import NepalMap from '../Visual/Map/NepalMap'
import InformationCenter from './InformationCenter/InformationCenter'

import classes from './ExactLocation.module.css'

export default class ExactLocation extends Component{
    
    state={
        position:[28.468664402097676,84.16637133707813],
        zoom:window.innerWidth>900?7:6,
        currentHospital:null,
        showHospital:false
    }

    updateHospitalHandler(hospital){
        this.setState({currentHospital:hospital});
    }

    selectHospitalHandler(value){
        this.setState({showHospital:value})
    }

    render(){
        return(
            <div className={classes.container}>
                <div className={classes.flexContainer}>
                    <NepalMap position={this.state.position}
                        zoom={this.state.zoom}
                        settings={{
                            className:classes.Map
                        }}
                        showTiles
                        showMarkers
                        showHospital={this.state.showHospital}
                    />
                </div>
                <div className={classes.flexContainer}>
                    <InformationCenter 
                        settings={{
                            className:classes.InfoContainer
                        }}
                        selectHospitalHandler={this.selectHospitalHandler.bind(this)}
                        cHospital={this.state.currentHospital} />
                </div>
            </div>
        )
    }
}