import React from 'react'

import Graphs from '../../Graphs/Graph'
import classes from './InformationCenter.module.css'

import {npData} from '../../../APIs/getDataImp'
import {casesArrayLength} from '../../../APIs/getCases'

const InformationCenter = (props) => {
    var sortedArray=['Active Cases','Total Positive Cases', 'Recovered', 'Deaths', 'People in Quarentine', 'Confirmed Cases in Isolation' , 'PCR-Test', 'PCR-Test/million', 'Recovery Rate'];
    var previousMap={}
    sortedArray.forEach((ele)=>{
        var data
        if(ele==='Recovery Rate'){
            data=(parseFloat(npData[ele])-parseFloat(npData[ele+'prev'])).toFixed(1)
        }else{
            data=npData[ele]-npData[ele+'prev']
        }
        previousMap[ele]=data<0?data:'+'+data
    }
    )

    return (
    <div {...props.settings}>
        <div className={classes.container}>
            <div className={classes.CheckboxContainer}>
                <label>
                    Testing Hospitals
                    <input value="off" type="checkbox" onChange={(e)=>props.selectHospitalHandler(e.target.checked)}/>
                </label>&nbsp;&nbsp;&nbsp;&nbsp;
                <label>
                    Graphs
                    <input value="off" type="checkbox" value={props.graphs} onChange={(e)=>props.enableGraphsHandler(e.target.checked)}/>
                </label>&nbsp;&nbsp;&nbsp;&nbsp;
                <label>
                    Nepal
                    <input value="off" type="checkbox" onChange={(e)=>props.enableNepalHandler(e.target.checked)} checked={props.nepal}/>
                </label>
                
            </div>
        </div>
        {props.showAllCases?
            <div className={classes.container} style={{padding:'10px'}}>
                 <p style={{textAlign:'center',display:'inline'}}>Cases: </p><button onClick={props.lessThanClickHandler} style={{display:'inline'}}>&lt; </button><p style={{textAlign:'center',display:'inline'}}> {props.casesStart}-{props.casesStart+1000} </p><button onClick={props.greaterThanClickHandler} style={{display:'inline'}}> &gt; </button><p style={{textAlign:'center',display:'inline'}}> out of {casesArrayLength}</p>
            </div>:''}
        {props.currentHospital?
            <div className={classes.container}>
                <div className={classes.InfoContainer}><span className={classes.close} onClick={(e)=>props.updateHospitalHandler(null)}>x</span>
                    <h2>{props.currentHospital.Name}</h2>
                    <p>Location: {props.currentHospital.Location}</p>
                    <p>TotalTests: {props.currentHospital.totaltests}</p>
                    <p>Percent of Total Testing: {props.currentHospital.percent}</p>
                </div>
            </div>:''}
        {props.graphs?
        <div className={classes.container}>
            <Graphs/>
        </div>
        :''}
        {props.nepal?
            <div className={classes.NepalContainer}>
                {sortedArray.map((element,index)=>{
                    return (<div key={String(index)+'weird fix'}>
                        <h3>{npData[element]}<small style={{color:"grey"}}>({previousMap[element]})</small></h3>
                        <p>{element}</p>
                    </div>)
                })}
            </div>
        :''}
    </div>
    )
}

export default InformationCenter
