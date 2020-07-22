import React from 'react'

import classes from './styling.module.css'

const legend = (props) => {

    if(!props.showLegend && props.sortedBy!=='name'){
        return <button style={{margin:"0",padding:"0",background:"none",color:'white',fontSize:'2em',border:"none"}} onClick={()=>props.legendHandler()}>+</button>
    }

    switch(props.sortedBy){
        case "name":
            return ''
        case "readmitted":
        case "deaths":
            return(
                <div onClick={()=>props.legendHandler()} className={classes.legend}>
                    <span className={classes.closeButton}>-</span>
                    <i style={{backgroundColor:'#800026'}}></i>&nbsp;10+<br/>
                    <i style={{backgroundColor:'#BD0026'}}></i>&nbsp;3-10<br/>
                    <i style={{backgroundColor:'#FC4E2A'}}></i>&nbsp;1-3<br/>
                    <i style={{backgroundColor:'#FFEDA0'}}></i>&nbsp;0<br/>
                </div>
            )
            
        case "total":
        case "recovered":
            return(
                <div onClick={()=>props.legendHandler()} className={classes.legend}>
                    <span className={classes.closeButton}>-</span>
                    <i style={{backgroundColor:'#800026'}}></i>&nbsp;1000+<br/>
                    <i style={{backgroundColor:'#BD0026'}}></i>&nbsp;500-1000<br/>
                    <i style={{backgroundColor:'#E31A1C'}}></i>&nbsp;200-500<br/>
                    <i style={{backgroundColor:'#FC4E2A'}}></i>&nbsp;100-200<br/>
                    <i style={{backgroundColor:'#FD8D3C'}}></i>&nbsp;50-100<br/>
                    <i style={{backgroundColor:'#FEB24C'}}></i>&nbsp;20-50<br/>
                    <i style={{backgroundColor:'#FED976'}}></i>&nbsp;0-10<br/>
                    <i style={{backgroundColor:'#FFEDA0'}}></i>&nbsp;0<br/>
                </div>
            );
        default:
            console.log('ERROR THIS SHOULDN/T HAPPEN')
    }

    
}

export default legend