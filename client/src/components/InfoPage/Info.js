import React from 'react';

import classes from './Info.module.css'

import {lastUpdated} from '../../APIs/getDataImp'
const infoPage = (props) => {
    return(<div className={classes.MainContainer}>
        <div className={classes.Info}>
            <p>
                Hello,<br/>
                <br/>

                This page is intented to use to see the state of COVID in Nepal.<br/><br/>
                From the Visualization page you can see district by district seperation of COVID.<br/><br/>
                The Exact Location is the work in progess, initially intented to show exactly where COVID patients. However, because the data for exact locations for quarentine locations are difficult to find, it currently shows only the testing hospital locations.<br/><br/>
                <small style={{textAlign:'right'}}><i>All data is from Ministry of Health & Population.</i></small><br/>
                <small><i>{lastUpdated?lastUpdated:<span style={{color:'red'}}>'Refresh'</span>}</i></small>
            </p>
        </div>
    </div>)
}

export default infoPage