import React from 'react'

import classes from "./table.module.css"

const table = (props) => {

    const handleSorting=(sortBy)=>{
        props.sortHandler(sortBy)
    }

    var colName=null,colTotal=null,colDeaths=null,colRecovered=null,colReadmitted=null;

    switch(props.sortedBy){
        case "name":
            colName=classes.sorting;
            break;
        case "total":
            colTotal=classes.sorting;
            break;
        case "deaths":
            colDeaths=classes.sorting;
            break;
        case "recovered":
            colRecovered=classes.sorting;
            break;
        case "readmitted":
            colReadmitted=classes.sorting;
            break;
        default:
            console.log('ERROR THIS SHOULD NOT HAPPEN')
    }
  
    return (
        <table className={classes.Table}>
            <colgroup>
              <col span="1" className={colName}/>
              <col span="1" className={colTotal}/>
              <col span="1" className={colDeaths}/>
              <col span="1" className={colRecovered}/>
              <col span="1" className={colReadmitted}/>
            </colgroup>
            <thead>
                <tr className={props.current&&props.current.name==="Nepal"?classes.selected:null} onClick={()=>props.clickHandler("Nepal")}>
                        <th>Nepal</th>
                        <th >{props.nepal['total']}</th>
                        <th >{props.nepal['deaths']}</th>
                        <th >{props.nepal['recovered']}</th>
                        <th >{props.nepal['readmitted']}</th>
                </tr>
                <tr>
                        <th onClick={()=>handleSorting('name')}>Name</th>
                        <th onClick={()=>handleSorting('total')}>Total</th>
                        <th onClick={()=>handleSorting('deaths')}>Deaths</th>
                        <th onClick={()=>handleSorting('recovered')}>Recovered</th>
                        <th onClick={()=>handleSorting('readmitted')}>Readmitted</th>
                </tr>
            </thead>
            <tbody>
            {props.districtArray.map((element)=>{
                const name=element["name"];
                const total=element["total"]
                const deaths=element["deaths"]
                const recovered=element["recovered"]
                const readmitted=element["readmitted"]

                var selected=null
                if(props.current && props.current.name===name){
                    selected=classes.selected
                }

                return (
                    <tr className={selected} key={name} onClick={()=>props.clickHandler(name)}>
                        <td className={props.sortedBy==='name'?classes.noBorder:null}>{name.substring(0,1).toUpperCase()+name.substring(1,name.length)}</td>
                        <td className={props.sortedBy==='total'?classes.noBorder:null}>{total}</td>
                        <td className={props.sortedBy==='deaths'?classes.noBorder:null}>{deaths}</td>
                        <td className={props.sortedBy==='recovered'?classes.noBorder:null}>{recovered}</td>
                        <td className={props.sortedBy==='readmitted'?classes.noBorder:null}>{readmitted}</td>
                    </tr>
                );
            })}
            </tbody>
        </table>
    )
}

export default React.memo(table)