import React from 'react';

import './header.css'

import SideDrawer from '../UI/Sidedrawer/Sidedrawer'
import Toolbar from '../UI/Toolbar/Toolbar'
import Aux from '../../hoc/Aux'

const Header = (props) => {
    const [showSideDrawer,updateSideDrawer]=React.useState(false);

    const sideDrawerClosedHandler=()=>{
        updateSideDrawer(false);
    }

    const sideDrawerOpenHandler=()=>{
        updateSideDrawer(true);
    }

    return (
        <Aux>
            <Toolbar clickedMenu={sideDrawerOpenHandler}/>
            <SideDrawer open={showSideDrawer} closed={sideDrawerClosedHandler}/>
        </Aux>
    );
}

export default Header