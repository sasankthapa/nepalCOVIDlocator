import React,{ useState } from 'react';
import classes from './InfoOverlay.module.css';

const InfoOverlay = () =>{
    const [show, setShow]=useState(true);

    return <div className={show?classes.mainContainer:classes.doneContainer}>
        {show?<>
        <div className={classes.info}>
            Not updated as of August 15th 2021.
        </div>
        <div className={classes.info}>
            Please check out <a href=' https://covid19.ndrrma.gov.np/' target="_blank">{"https://covid19.ndrrma.gov.np/"}</a>
        </div>
        <div onClick={()=>setShow(setShow(false))} className={classes.info}>
            Close
        </div></>:
        <div className={classes.info}>
            Made with <span aria-label="heart" role="img">💚</span> by Sasank
        </div>}
    </div>
}

export default InfoOverlay;
