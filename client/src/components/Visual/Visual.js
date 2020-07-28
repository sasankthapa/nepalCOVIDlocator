import React, { Component } from 'react';

import NepalMap from './Map/NepalMap'
import VisualDesc from './VisualDesc/VisualDesc'
import {sort, map} from '../../HelperFunctions/DistrictInfo'
import {districts} from "../../APIs/getDataImp";
import {nepal} from '../../HelperFunctions/DistrictInfo'

import classes from './Visual.module.css'

export default class Visual extends Component {

    state={
        position:[28.468664402097676,84.16637133707813],
        zoom:window.innerWidth>900?7:6,
        districtsArray:[...districts],
        sortedBy:'total',
        order:'desc',
        selected:nepal,
        showLegend:false,
    }

    sortDistrictsHandler(sortBy){
        var currSortedBy=this.state.sortedBy;
        var order=this.state.order
        if(currSortedBy!==sortBy){
            order= sortBy==='name'? "asc":"desc";
        }else{
            order=order==='asc'?'desc':'asc';
        }
        sort(districts,sortBy, order)

        this.setState({districtsArray:[...districts],order,sortedBy:sortBy});
    }

    districtClickHandler(name){
        if(name==="Nepal"){
            return this.setState({selected:nepal})
        }
        if(this.state.selected && name===this.state.selected.name){
            return this.setState({selected:null})
        }
        this.setState({selected:this.state.districtsArray[map[name]]});
    }

    legendToggleHandler(){
        var curr=this.state.showLegend;
        curr=!curr
        this.setState({showLegend:curr})
    }
    render(){
        return(
            <div className={classes.VisualContainer}>
                <div className={classes.flexContainer}>
                    <NepalMap position={this.state.position} 
                    zoom={this.state.zoom}
                    current={this.state.selected}
                    sortedBy={this.state.sortedBy}
                    showLegend={this.state.showLegend}
                    clickHandler={this.districtClickHandler.bind(this)}
                    legendHandler={this.legendToggleHandler.bind(this)}
                    settings={{
                        className:classes.Map,
                        maxBounds:[[25,79],[31,90]],
                        attributionControl: false,
                        minZoom:6,
                        maxZoom:7,
                        zoomControl:false,
                        scrollWheelZoom: true}} 
                    />  
                </div>
                <div className={classes.flexContainer}>
                    <VisualDesc 
                        nepal={nepal}
                        settings={{className:classes.VisualDesc}} 
                        districtArray={this.state.districtsArray}
                        current={this.state.selected}
                        sortedBy={this.state.sortedBy}
                        sortHandler={this.sortDistrictsHandler.bind(this)}
                        clickHandler={this.districtClickHandler.bind(this)}/>
                </div>
            </div>
        )
    }
}