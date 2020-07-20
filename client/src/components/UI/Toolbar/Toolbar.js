import React from 'react'
import classes from './Toolbar.module.css'
import NavigationItems from '../NavigationItems/NavigationItems'

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <div className={`${classes.Menu} ${classes.MobileOnly}`} onClick={props.clickedMenu}>
            <div className={classes.Bar}></div>
            <div className={classes.Bar}></div>
            <div className={classes.Bar}></div>
        </div>
        <h2>Nepal COVID Locator</h2>
        <nav className={classes.DesktopOnly}>
            <NavigationItems/>
        </nav>
    </header>
);

export default toolbar;