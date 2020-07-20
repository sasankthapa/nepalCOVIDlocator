import React from 'react'

import classes from './styling.module.css'

const selectedDistricts=(props)=>{
    const current=props.current
    const name=current['name']
    const total=current['total']
    const deaths=current['deaths']
    const recovered=current['recovered']
    const readmitted=current['readmitted']

    return (<div className={classes.container}>
        <span className={classes.closeButton} onClick={()=>props.closeHandler(null)}>x</span>
        <h3>{name.substring(0,1).toUpperCase()+name.substring(1,name.length)}</h3>
        <p className={props.sortedBy==='total'?classes.bold:null}>Total: {total}</p>
        <p className={props.sortedBy==='deaths'?classes.bold:null}>Death: {deaths}</p>
        <p className={props.sortedBy==='recovered'?classes.bold:null}>Recovered: {recovered}</p>
        <p className={props.sortedBy==='readmitted'?classes.bold:null}>Readmitted: {readmitted}</p>
    </div>)
}

export default selectedDistricts