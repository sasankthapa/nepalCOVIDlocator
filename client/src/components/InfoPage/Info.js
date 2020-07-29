import React from 'react';

import classes from './Info.module.css'

import {lastUpdated} from '../../APIs/getDataImp'
const infoPage = (props) => {
    return(<div className={classes.MainContainer}>
        <div className={classes.Info}>
            <p>
                Namaste,<br/>
                <br/>

                From the District page you can see district by district seperation of COVID.<br/><br/>
                Please contact if you have exact locations of quarentine facilities so we all are able to see potentially dangerous places.<br/><br/>
                <a href="mailto: sasank.thapa2000@gmail.com" style={{float:"right"}}>mail</a><br/><br/>
                <small><i>Awaiting update #170(July 28th) from ministry.</i></small>
                <span style={{fontSize:'0.8rem'}}>Take care everyone <span role="img" aria-labelledby="jsx-a11y/accessible-emoji">💚</span></span><br/>
                <small><i>{lastUpdated?lastUpdated:<span style={{color:'red'}}>'Refresh'</span>}</i></small>
            </p>
        </div>
    </div>)
}

export default infoPage