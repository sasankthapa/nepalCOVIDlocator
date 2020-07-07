import React,{useState} from 'react'

import './InitialInfo.css'

const InitialInfo = (props) => {
    const [classes,updateClassesLah]=useState('initialInfo');

    const closeInfo =()=>{
        updateClassesLah('initialInfo close')
        setTimeout(()=>{
            updateClassesLah('initialInfo close closeComplete');
        },1000);
    }

    return (
        <div className={classes}>
            <h2>नमस्ते</h2>
            <p>This page is intended for COVID patients to report their locations so we have better knowledge of COVID all over Nepal.</p>
            <h2>कृपया हजुरलाई COVID निदान गरिएको छ भने फारम भर्नुहोला।</h2>
            <small style={{marginRight:'20px'}}><a href="mailto:sasank.thapa2000@gmail.com">contact</a></small>
            <button onClick={closeInfo}>Close</button>
        </div>
    )
}

export default InitialInfo