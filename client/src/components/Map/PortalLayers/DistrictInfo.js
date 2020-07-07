import React from 'react'
import {casesReportedMap} from '../../../HelperFunctions/findDistrict'

const districtInfo = (props) => {
    const districtName=Object.keys(props.feature).length===0? 'Select a district':props.feature.properties.DISTRICT
    const casesReported=casesReportedMap[districtName]
    return (
        <div className="info">
            <h2 style={{marginTop:'10px'}}>{districtName}</h2>
            <h4>Cases Reported: {casesReported}</h4>
        </div>
    )
}

export default districtInfo