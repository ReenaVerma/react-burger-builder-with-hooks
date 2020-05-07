import React from 'react';
import classes from './SideDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const sideDrawer = (props) => {

    let attachClasses = [classes.SideDrawer, classes.Close]; //sidedrawer class, closed class
    console.log('attachClasses', attachClasses);

    if (props.open) {
        attachClasses = [classes.SideDrawer, classes.Open];
    }

    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed} />
            {/* <div className={classes.SideDrawer}> */}
            <div className={attachClasses.join(' ')}>
                <div className={classes.Logo}>  {/* <Logo height="11%" /> */}
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>
    );
};

export default sideDrawer;