import React, { Component } from 'react'

import {getAllCasesRecursive} from '../../APIs/getCases'
import NepalMap from '../Visual/Map/NepalMap'
import InformationCenter from './InformationCenter/InformationCenter'

import classes from './ExactLocation.module.css'

export default class ExactLocation extends Component{

    componentDidMount(){
        getAllCasesRecursive('https://bipad.gov.np/api/v1/covid19-case/?limit=-1&fields=id,death_on,gender,point,age,reported_in,recovered_on').then(this.setState({disableShowAllCases:false}))
    }

    state={
        position:[28.468664402097676,84.16637133707813],
        zoom:window.innerWidth>900?7:6,
        currentHospital:null,
        showHospital:false,
        disableShowAllCases:true,
        showAllCases:false,
        geojsonHide:null,
        enableGraphs:false,
        nepal:true,
        biggermap:false,
        updatekey:'1'
    }

    showAllCasesHandler=(value)=>{
        this.setState({showAllCases:value})
    }

    enableGraphsHandler=(value)=>{
        this.setState({enableGraphs:value})
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

    enableNepalHandler=(value)=>{
        this.setState({nepal:value})
    }

    biggermapHandler=()=>{
        const prev=this.state.biggermap
        this.setState({biggermap:!prev})
        setTimeout(()=>this.setState({updatekey:this.state.updatekey==='1'?'2':'1'}),1000)
    }

    render(){
        var flexBoxClasses=classes.flexContainer
        if(this.state.biggermap){
            flexBoxClasses=`${classes.flexContainer} ${classes.BiggerMap}`
        }
        return(
            <div className={classes.container}>
                <div className={flexBoxClasses}>
                    <NepalMap updateKey={this.state.updatekey}
                        position={this.state.position}
                        zoom={this.state.zoom}
                        settings={{
                            className:classes.Map,
                            minZoom:6,
                            zoomControl:false,
                            dragging:true,
                        }}
                        showAllCases={this.state.showAllCases}
                        showTiles
                        showMarkers
                        updateHospitalHandler={this.updateHospitalHandler.bind(this)}
                        showHospital={this.state.showHospital}
                        geojsonHide={this.state.geojsonHide}
                        geojsonClickHandler={this.geojsonClickHandler.bind(this)}
                        biggermapHandler={this.biggermapHandler.bind(this)}
                    />
                </div>
                <div className={flexBoxClasses}>
                    <InformationCenter 
                        settings={{
                            className:classes.InfoContainer
                        }}
                        disableShowAllCases={this.state.disableShowAllCases}
                        showAllCasesHandler={this.showAllCasesHandler.bind(this)}
                        selectHospitalHandler={this.selectHospitalHandler.bind(this)}
                        updateHospitalHandler={this.updateHospitalHandler.bind(this)}
                        enableGraphsHandler={this.enableGraphsHandler.bind(this)}
                        enableNepalHandler={this.enableNepalHandler.bind(this)}
                        currentHospital={this.state.currentHospital} 
                        graphs={this.state.enableGraphs}
                        nepal={this.state.nepal}/>
                </div>
            </div>
        )
    }
}