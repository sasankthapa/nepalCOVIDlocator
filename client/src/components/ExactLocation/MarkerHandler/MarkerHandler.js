import React from 'react'
import Marker from './Marker/Marker'

import Aux from '../../../hoc/Aux'

import { hospitals } from '../../../APIs/getDataImp'
import { casesArray } from '../../../APIs/getCases'

const MarkerHandler = (props) =>{
    let displayedCases=[]
    if(props.allcases){
        displayedCases=[];
        for(var i=props.casesStart;i<props.casesStart+1000;i++){
            displayedCases.push(<Marker
                icon="covid"
                key={i+'123'}
                current={casesArray[i]}
                position={casesArray[i].point.coordinates.reverse()}
            />)
        }
    }
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
            {displayedCases}
        </Aux>
    )
}

export default MarkerHandler