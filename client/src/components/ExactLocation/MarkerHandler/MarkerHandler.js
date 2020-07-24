import React from 'react'
import Marker from './Marker/Marker'

import Aux from '../../../hoc/Aux'

import { hospitals } from '../../../APIs/getDataImp'

const MarkerHandler = (props) =>{
    return (
        <Aux>
            {props.hospital?hospitals.map((element,index)=>{
                return <Marker 
                    key={index} 
                    current={element} 
                    position={[element.lat,element.long]} 
                    message={element.Name} 
                    updateHospitalHandler={props.updateHospitalHandler}/>
                }):''}
        </Aux>
    )
}

export default MarkerHandler