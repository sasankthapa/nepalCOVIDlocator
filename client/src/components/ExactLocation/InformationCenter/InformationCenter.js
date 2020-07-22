import React from 'react'

import classes from './InformationCenter.module.css'
const InformationCenter = (props) => {

    return (<div {...props.settings}>
        <div className={classes.container}>
            <div className={classes.CheckboxContainer}>
                <label>
                    Hospitals
                    <input value="off" type="checkbox" onChange={(e)=>props.selectHospitalHandler(e.target.checked)}/>
                </label>
            </div>
            {props.currentHospital?'':''}
        </div>
    </div>)
}

export default InformationCenter