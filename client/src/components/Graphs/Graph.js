import React, {useState} from 'react'
import { VictoryChart, VictoryAxis, VictoryBar } from 'victory'

import Aux from '../../hoc/Aux'

import dailyData from '../../assets/daily.json'

const Graph = (props) => {
    const [current, setCurrent]=useState(null);

    const updateStateHandler = (e) => {
        console.log(e.target.value,'hhjksadf')
        setCurrent(e.target.id)
    }
    var chart='';
    if(current){
        chart=(<VictoryChart domainPadding={20} animate={{ duration: 1000 }}
            
            
            >
                <VictoryAxis style={{ axisLabel: {fontSize: 11, padding: 30}, tickLabels: { angle: -60 }}}/>
                <VictoryAxis dependentAxis/> 
                <VictoryBar 
                style={{ data: { fill: "tomato" }, labels: {padding:5}}}
                data={dailyData} 
                labels={({ datum }) => `${datum[current]}`}
                x="date" 
                y={current} />
            </VictoryChart>);

    }
    return (
        <Aux>
        <h3 style={{padding:0,margin:0,paddingTop:'10px'}}>{current?current.substring(0,1).toUpperCase()+current.substring(1,current.length):"Select"}</h3>
        <small style={{color:'red',fontSize:'10px',textAlign:'right'}}><i>Graphs might be buggy, please refresh if this happens.</i></small>
        <div >
            <input type="radio" id="totaltests" value="Total Tests" name="current" onClick={updateStateHandler}/>
            <label for="totaltests">Total Test</label>
            <input type="radio" id="confirmed" value="Confirmed" name="current" onClick={updateStateHandler}/>
            <label for="confirmed">Confirmed</label>
            <input type="radio" id="deaths" value="Deaths" name="current" onClick={updateStateHandler}/>
            <label for="deaths">Deaths</label>
            <input type="radio" id="recovered" value="Recovered" name="current" onClick={updateStateHandler}/>
            <label for="recovered">Recovered</label>
        </div>
        {chart}
        </Aux>
    )
}

export default Graph