import React, {useState} from 'react'
import { VictoryChart, VictoryAxis, VictoryLine, VictoryZoomContainer } from 'victory'

import Aux from '../../hoc/Aux'

import { daily } from '../../APIs/getDataImp'

const Graph = (props) => {
    const [current, setCurrent]=useState(null);
    const [dataLength, setDataLength]=useState(5);
    const updateStateHandler = (e) => {
        setCurrent(e.target.id)
    }
    const updateDataLengthHandler=(e)=>{
        setDataLength(e.target.value)
    }
    var optionsList=[]
    for(var i=1;i<=daily.length;i++){
        optionsList.push(<option key={String(i)+"chckbox"} value={i}>{i}</option>)
    }
    var chart='';
    if(current){
        chart=(
            <VictoryChart domainPadding={20} containerComponent={<VictoryZoomContainer zoomDimension="x" style={{
        pointerEvents: "auto",
        userSelect: "auto",
        touchAction: "auto"
      }}/>}>
                <VictoryAxis style={ {tickLabels: { fontSize:11,angle: -90, padding:20 }}}/>
                <VictoryAxis dependentAxis/> 
                <VictoryLine 
                // animate={{ duration: 1000 }} 
                style={{ labels: {padding:10}}}
                data={ daily.slice(daily.length-dataLength,daily.length) } 
                labels={({ datum }) => `${datum[current]}`}
                x="date" 
                y={current} />
            </VictoryChart>
    );

    }
    return (
        <Aux>
        <h3 style={{padding:0,margin:0,paddingTop:'10px'}}>{current?current.substring(0,1).toUpperCase()+current.substring(1,current.length):"Select"}</h3>
        {/* <small style={{color:'red',fontSize:'10px',textAlign:'right'}}><i>Graphs may be buggy.</i></small> */}
        <div >
            <input type="radio" id="totaltests" value="Total Tests" name="current" onClick={updateStateHandler}/>
            <label htmlFor="totaltests">Total Test</label>
            <input type="radio" id="confirmed" value="Confirmed" name="current" onClick={updateStateHandler}/>
            <label htmlFor="confirmed">Confirmed</label>
            <input type="radio" id="deaths" value="Deaths" name="current" onClick={updateStateHandler}/>
            <label htmlFor="deaths">Deaths</label>
            <input type="radio" id="recovered" value="Recovered" name="current" onClick={updateStateHandler}/>
            <label htmlFor="recovered">Recovered</label>
            <p>Last {<select name="numOdays" id="number" onChange={updateDataLengthHandler} defaultValue={dataLength}>
                {optionsList}
            </select>} days</p>
        </div>
        {chart}
        </Aux>
    )
}

export default Graph