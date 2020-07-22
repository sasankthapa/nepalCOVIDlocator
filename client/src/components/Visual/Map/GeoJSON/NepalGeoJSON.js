import React from 'react'
import { GeoJSON } from 'react-leaflet'

import Nepal from '../../../../assets/nepalgeojson.json'

import Districts,{ map } from '../../../../HelperFunctions/DistrictInfo'

const NepalGeoJSON = (props) => {
    function basedOnSmallData(d){
        return d>10? '#800026':
                d>3? '#BD0026':
                d>0? '#FC4E2A':
                    '#FFEDA0'
    }

    function basedOnProvince(province){
        switch(province){
            case 7:
                return '#59d97b'
            case 1:
                return '#59d9c6'
            case 2:
                return '#6570eb'
            case 3:
                return '#eb6565'
            case 4:
                return '#ebc565'
            case 5:
                return '#65e2eb'
            case 6:
                return '#b77bdd'
            default:
                return '#222'
        }
    }

    function getColor(d) {
        return d > 1000 ? '#800026' :
               d > 500  ? '#BD0026' :
               d > 200  ? '#E31A1C' :
               d > 100  ? '#FC4E2A' :
               d > 50   ? '#FD8D3C' :
               d > 20   ? '#FEB24C' :
               d > 10   ? '#FED976' :
                          '#FFEDA0';
    }

    const exactMapStyle=(curr)=>{
        const province=curr.properties.PROVINCE
        return {
            weight:1,
            opacity:0.5,
            fillColor:basedOnProvince(province),
            color:'black',
            fillOpacity:0.5,
            dashArray:0,
        }
    }

    const setStyle = (curr) =>{
        if(props.showTiles){
            return exactMapStyle(curr);
        }
        var districtName=curr.properties.DISTRICT.toLowerCase()
        const province=curr.properties.PROVINCE
        const districtData=Districts[map[districtName]];
        if(!districtData) console.log(districtName,curr,districtData)
        var selectedStyles={}
        if(props.current && props.current.name===districtName){
            selectedStyles={
            opacity:1,
            weight:5,
            fillOpacity:1
            }
        }
        return {
            weight:1,
            opacity:0.5,
            fillColor:props.sortedBy==='name'?basedOnProvince(province):(props.sortedBy==='deaths' || props.sortedBy==='readmitted')?basedOnSmallData(districtData[props.sortedBy]):getColor(districtData[props.sortedBy]),
            color:'black',
            fillOpacity:1,
            dashArray:0,
            ...selectedStyles
        }
    }

    const onEachFeatureHandler=(feature,layer)=>{
        if(!props.showTiles){
            layer.on({
                click:(e)=>{props.clickHandler(e.target.feature.properties.DISTRICT.toLowerCase())}
            })    
        }else{
            
        }
    }

    return (Nepal.features.map((element,index)=>{
        return <GeoJSON key={index} data={element} style={setStyle} onEachFeature={onEachFeatureHandler}/>
    }));
}

export default NepalGeoJSON;