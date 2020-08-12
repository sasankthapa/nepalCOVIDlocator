import React from 'react'
import Marker from './Marker/Marker'

import Aux from '../../../hoc/Aux'

import { hospitals } from '../../../APIs/getDataImp'
import { casesArray } from '../../../APIs/getCases'

const MarkerHandler = (props) =>{
    return (
        <Aux>
            {props.hospital?hospitals.map((element,index)=>{
                return <Marker 
                    icon="hospital"
                    key={index} 
                    current={element} 
                    position={[element.lat,element.long]} 
                    message={element.Name} 
                    updateHospitalHandler={props.updateHospitalHandler}/>
                }):''}
            {props.allcases?casesArray.map((element,index)=>{
                console.log(index);
                return <Marker
                    icon="hospital"
                    key={index+'123'}
                    current={element}
                    position={element.point.coordinates.reverse()}
                />
            }):''}
        </Aux>
    )
}

export default MarkerHandler