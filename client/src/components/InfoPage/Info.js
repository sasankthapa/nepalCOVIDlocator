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
                <small style={{float:'right'}}><i>All data is from Ministry of Health & Population.</i></small><br/>
                <small><i>{lastUpdated?lastUpdated:<span style={{color:'red'}}>'Refresh'</span>}</i></small>
                <a href="mailto: sasank.thapa2000@gmail.com" style={{float:"right"}}>mail</a><br/><br/>
                <span style={{fontSize:'0.8rem'}}>Take care everyone <span role="img" aria-labelledby="jsx-a11y/accessible-emoji">💚</span></span>
            </p>
        </div>
    </div>)
}

export default infoPage