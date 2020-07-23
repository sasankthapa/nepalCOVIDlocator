import React from 'react';

import classes from './Info.module.css'
const infoPage = (props) => {
    return(<div className={classes.MainContainer}>
        <div className={classes.info}>
            <p>
                Hello,<br/>
                <br/>

                This page was intented to use to see the state of COVID in Nepal.
            </p>
        </div>
    </div>)
}

export default infoPage