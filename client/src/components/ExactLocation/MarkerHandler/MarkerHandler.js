import React from 'react'
import Marker from './Marker/Marker'

import Aux from '../../../hoc/Aux'

import hospitalArray from '../../../assets/hospitals.json'

const MarkerHandler = (props) =>{
    console.log(hospitalArray,props.hospital)
    return (
        <Aux>
            {props.hospital?hospitalArray.map((element,index)=>{
                return <Marker key={index} position={[element.lat,element.long]} message={element.Name}/>
            }):''}
        </Aux>
    )
}

export default MarkerHandler