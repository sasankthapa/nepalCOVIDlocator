import React,{useState} from 'react'

import './InitialInfo.css'
import Aux from '../../../hoc/Aux'

const InitialInfo = (props) => {
    const [classes,updateClassesLah]=useState('initialInfo');

    const closeInfo =()=>{
        updateClassesLah('initialInfo close')
        setTimeout(()=>{
            updateClassesLah('initialInfo close closeComplete');
        },1000);
    }

    var info=''
    if(props.english){
        info=(
            <Aux>
            <h2>Namaste. (Please read)</h2>
            <p>COVID patients please report through the form in the left.</p>
            <p>This page is intended for COVID patients to report their exact locations so we have better knowledge of COVID all over Nepal.</p>
            <p>Since this stores your exact location it is okay to not put sensitive data but please dont report if you don't have or aren't tested positive for COVID.</p>
            </Aux>
        );
    }else{
        info=(
            <Aux>
            <h1>नमस्ते (कृपया पढ्नुहोस्)</h1>
            <h3 style={{margin:'10px'}}>कृपया हजुरलाई COVID निदान गरिएको छ भने दाहिने  फारम रिपोर्ट गर्नुहोला।</h3>
            <h3 style={{margin:'10px'}}>यो पेज COVID रोगीको ठिक ठाउँ थाहा पाउन बनाएको हो। ठ्याक्क ठाउँ थाहा पाउने हुनाले तपाईले नाजुक डाटा नहाल्दा हुन्छ तर COVID नभए फोरम please नाभर्नुहोला।</h3>
            </Aux>
        );
    }

    return (
        <div className={classes}>
        <span style={{marginLeft:'20px',color:'blue',cursor:'pointer'}} onClick={props.handleButtonClick}>{props.english?"Nepali":"English"}</span>
        {info}
        <small style={{marginRight:'20px'}}><a href="mailto:sasank.thapa2000@gmail.com">contact</a></small><button onClick={closeInfo}>Close</button>
        
        </div>
    )
}

export default InitialInfo