import React from 'react';
import classes from './InfoOverlay.module.css';

const InfoOverlay = () =>{
    return <div className={classes.mainContainer}>
        <div className={classes.info}>
            Made with <span aria-label="heart" role="img">💚</span> by Sasank
        </div>
    </div>
}

export default InfoOverlay;
