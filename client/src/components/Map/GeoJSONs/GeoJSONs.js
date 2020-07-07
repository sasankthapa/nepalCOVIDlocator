import React from 'react'
import { GeoJSON } from 'react-leaflet'

import province1 from '../../../assets/province1.json'
import province2 from '../../../assets/province2.json'
import province3 from '../../../assets/province3.json'
import province4 from '../../../assets/province4.json'
import province5 from '../../../assets/province5.json'
import province6 from '../../../assets/province6.json'
import province7 from '../../../assets/province7.json'

import {isEmptyObject} from '../../../HelperFunctions/objectChecking'

const provinceArray=[province1, province2, province3, province4, province5, province6, province7];


const GeoJSONs = (props) => {
    function getColor(feature){
        if(isEmptyObject(props.currentFeature)){
            return '#3322ff'
        }else if(props.currentFeature.properties.DISTRICT===feature.properties.DISTRICT){
            return '#ccc'
        }
        //if(!isEmptyObject(feature) && props.currentFeature.properties.DISTRICT===feature.properties.DISTRICT){
        //    return '#ccc'
        //}
        return '#3322ff'
    }
  
    function highLightFeature(e){
        props.updateStateInMaps(e.target.feature);
    }
    
    function resetHighlight(e) {
        props.updateStateInMaps({})
    }
      
    function onEachFeatureHandler(feature,layer){
        layer.on({
            mouseover:highLightFeature,
            mouseout:resetHighlight,
            click:highLightFeature
        })
    }

    function setStyle(feature){
        return {
            weight:3,
            opacity:0.7,
            fillColor:getColor(feature),
            color:'black',
            fillOpacity:0.7,
            dashArray:feature.properties.PROVINCE
        };
    }
    
    return (provinceArray.map((element,index)=>{
            return <GeoJSON key={index} data={element} style={setStyle} onEachFeature={onEachFeatureHandler}/>
        })
    );
}

export default GeoJSONs