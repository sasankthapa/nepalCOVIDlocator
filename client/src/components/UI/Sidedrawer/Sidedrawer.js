import React from 'react'
import NavigationItems from '../NavigationItems/NavigationItems'
import classes from './Sidedrawer.module.css'
import Backdrop from '../Backdrop/Backdrop'
import Aux from '../../../hoc/Aux'

const sidedrawer = (props) => {
    let attachedClasses=[classes.Sidedrawer,classes.Closed]
    if(props.open){
        attachedClasses=[classes.Sidedrawer,classes.Open]
    }
    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>
                <h1>COVID-19 Locator</h1>
                <nav>
                    <NavigationItems/>
                </nav>
            </div>
        </Aux>
    );
};

export default sidedrawer