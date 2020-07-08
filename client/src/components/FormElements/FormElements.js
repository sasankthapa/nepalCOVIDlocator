import React, { Component } from 'react';

import Form from './Form/Form'
import InitialForm from './InitialInfo/InitialInfo'

import './FormElements.css'

import { findDistrict } from '../../HelperFunctions/findDistrict'
import { getLocation } from '../../APIs/getLocation'
import Aux from '../../hoc/Aux'

export default class FormElements extends Component{
    state={
        showForm:false,
        submitted:false,
        formInEnglish:false,
        hasUsersLocation:false
    }

    DISTRICT="";

    askBrowserForLocation= ()=>{
        this.setState({ hasUsersLocation:true })
        getLocation().then(({lat,long})=>{
            var district=findDistrict(lat,long)
            // if(!district){
            //     district="DARCHULA"
            // }else if(district==="DARCHULA"){
            //     district=undefined;
            // }
            if(!district){
                alert('not in nepal...')
                return;
            }
            this.DISTRICT=district;
            this.props.updateLatLong({
                lat,
                long,
                zoom:13,
                fillingForm:true,
                DISTRICT:district
            })
            this.showForm(true);
        }
        );
    }

    showForm(showForm){
        console.log('here',showForm)
        this.setState({showForm});
    }

    handleSubmitClick(formData){
        this.props.submitForm(formData)
    }

    handleLanguageChange(){
        var curr=this.state.formInEnglish
        curr=!curr;
        this.setState({formInEnglish:curr})
    }

    handleFormClose(){
        this.showForm(false);
        this.props.resetLatLong()
    }

    render(){
        const form=this.state.showForm? <Form handleSubmitClick={this.handleSubmitClick.bind(this)} DISTRICT={this.DISTRICT} closeForm={this.handleFormClose.bind(this)}/> : <button className="openFormButton" onClick={this.askBrowserForLocation.bind(this)}>Report your Case</button>
        return (
            <Aux>
                {form}
                <InitialForm english={this.state.formInEnglish} handleButtonClick={this.handleLanguageChange.bind(this)}/>
            </Aux>
        );
    }
}