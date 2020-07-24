import React, {useState} from 'react'
import { VictoryChart, VictoryAxis, VictoryBar } from 'victory'

import Aux from '../../hoc/Aux'

import { daily } from '../../APIs/getDataImp'

const Graph = (props) => {
    const [current, setCurrent]=useState(null);
    const updateStateHandler = (e) => {
        setCurrent(e.target.id)
    }
    var chart='';
    if(current){
        chart=(<VictoryChart domainPadding={20} animate={{ duration: 1000 }}
            
            
            >
                <VictoryAxis style={ {tickLabels: { fontSize:11,angle: -90, padding:20 }}}/>
                <VictoryAxis dependentAxis/> 
                <VictoryBar 
                style={{ data: { fill: "tomato" }, labels: {padding:5}}}
                data={ daily } 
                labels={({ datum }) => `${datum[current]}`}
                x="date" 
                y={current} />
            </VictoryChart>);

    }
    return (
        <Aux>
        <h3 style={{padding:0,margin:0,paddingTop:'10px'}}>{current?current.substring(0,1).toUpperCase()+current.substring(1,current.length):"Select"}</h3>
        <small style={{color:'red',fontSize:'10px',textAlign:'right'}}><i>Graphs may be buggy.</i></small>
        <div >
            <input type="radio" id="totaltests" value="Total Tests" name="current" onClick={updateStateHandler}/>
            <label htmlFor="totaltests">Total Test</label>
            <input type="radio" id="confirmed" value="Confirmed" name="current" onClick={updateStateHandler}/>
            <label htmlFor="confirmed">Confirmed</label>
            <input type="radio" id="deaths" value="Deaths" name="current" onClick={updateStateHandler}/>
            <label htmlFor="deaths">Deaths</label>
            <input type="radio" id="recovered" value="Recovered" name="current" onClick={updateStateHandler}/>
            <label htmlFor="recovered">Recovered</label>
        </div>
        {chart}
        </Aux>
    )
}

export default Graph