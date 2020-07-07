import React, { Component } from 'react';

import Form from './Form/Form'
import InitialForm from './InitialInfo/InitialInfo'

import './FormElements.css'

import { findDistrict } from '../../HelperFunctions/findDistrict'

import Aux from '../../hoc/Aux'

export default class FormElements extends Component{
    state={
        showForm:false,
        submitted:false
    }

    DISTRICT="";

    askBrowserForLocation=()=>{
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition((position)=>{
                const lat=position.coords.latitude
                const long=position.coords.longitude
                var district=findDistrict(lat,long)
                if(!district){
                    alert('not in nepal...')
                    return;
                }
                this.DISTRICT=district;
                this.props.updateLatLong({
                    lat,
                    long,
                    zoom:14,
                    fillingForm:true,
                    DISTRICT:district
                })
                this.showForm(true);
            }, ()=>{
                alert('Please enable geolocation on your device.');
            })
        }else{
            alert('Geolocation is not supported');
        }
        
    }

    showForm(showForm){
        this.setState({showForm});
    }

    handleSubmitClick(formData){
        this.props.submitForm(formData)
    }
    render(){
        const form=this.state.showForm? <Form handleSubmitClick={this.handleSubmitClick.bind(this)} DISTRICT={this.DISTRICT}/> : <button className="openFormButton" onClick={this.askBrowserForLocation.bind(this)}>Report your Case</button>
        return (
            <Aux>
                {form}
                <InitialForm/>
            </Aux>
        );
    }
}