import React from 'react'

import classes from './InformationCenter.module.css'
const InformationCenter = (props) => {
    return (
    <div {...props.settings}>
        <div className={classes.container}>
            <div className={classes.CheckboxContainer}>
                <label>
                    Hospitals
                    <input value="off" type="checkbox" onChange={(e)=>props.selectHospitalHandler(e.target.checked)}/>
                </label>
            </div>
        </div>
        {props.currentHospital?
            <div className={classes.container}>
                <div className={classes.InfoContainer}><span className={classes.close} onClick={(e)=>props.updateHospitalHandler(null)}>x</span>
                    <h2>{props.currentHospital.Name}</h2>
                    <p>Location: {props.currentHospital.location}</p>
                    <p>TotalTests: {props.currentHospital.totaltests}</p>
                    <p>Percent of Total Testing: {props.currentHospital.percent}</p>
                </div>
            </div>:''}
    </div>
    )
}

export default InformationCenter