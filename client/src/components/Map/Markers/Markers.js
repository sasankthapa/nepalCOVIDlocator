import React from 'react'
import Marker from './Marker/Marker'

const markers =(props)=>{
    const entries=props.entries.map((entry,index)=>{
        const position=[entry.lat,entry.long];
        return <Marker key={index} message={entry.message} position={position}/>
    })
    return entries;
}

export default markers;