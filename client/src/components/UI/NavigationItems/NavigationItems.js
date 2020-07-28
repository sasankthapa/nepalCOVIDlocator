import React from 'react'
import classes from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem'

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" exact>Exact Location</NavigationItem>
        <NavigationItem link="/visual">Districts</NavigationItem>
        <NavigationItem link="/info" >Info</NavigationItem>
    </ul>
);

export default navigationItems