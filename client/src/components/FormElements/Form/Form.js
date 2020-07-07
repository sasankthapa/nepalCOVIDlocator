import React, { useState } from 'react'

import "./Form3.css"

const Form = (props) => {
    const initialState=Object.freeze({
        name:'',
        phonenumber:'',
        age:null,
        DISTRICT:props.DISTRICT,
        message:''
    });

    const [formData, updateFormData] = useState(initialState);

    const onChangeHandler= (e) => {
        e.preventDefault()
        var newState={
            ...formData,

            [e.target.id]:e.target.value.trim()
        }

        updateFormData(newState);
    }

    const validateAndHandleSubmit=(e)=>{
        e.preventDefault()
        if(formData.name==='' || formData.phonenumber==='' || formData.age===null){
            alert('Please fill the required fields');
            return;
        }
        props.handleSubmitClick(formData)
    }

    return (
        <form className="container" onSubmit={validateAndHandleSubmit}>
            <h2>Please keep social distancing.</h2>
            <small>* are required</small>
            <div className="formControl">
                <label htmlFor="name">Name<sup>*</sup>: </label>
                <input id="name" type="text" autoComplete="off" onChange={onChangeHandler}/>    
            </div>
            <div className="formControl">
                <label htmlFor="phonenumber">Phone Number<sup>*</sup>: </label>
                <input id="phonenumber" type="text" maxLength={10} onChange={onChangeHandler}/>
            </div>
            <div className="formControl">
                <label htmlFor="age">Age<sup>*</sup>: </label>
                <input id="age" type="number" min="1" onChange={onChangeHandler} placeholder="1"/>
            </div>
            <div className="formControl">
                <label htmlFor="District">District: </label>
                <input id="DISTRICT" type="text" value={formData.DISTRICT} onChange={onChangeHandler} disabled/>
            </div>       
            <div className="formControl">
                <label htmlFor="Message">Message: </label>
                <textarea id="message" maxLength="150" rows="3" placeholder="Leave a message for people to see!" onChange={onChangeHandler}></textarea>
            </div>
            <button className="button" type="submit">Submit</button>
        </form>        
    )
}

export default Form