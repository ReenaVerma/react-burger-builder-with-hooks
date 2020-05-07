import React from 'react';
import burgerLogo from '../../../src/assets/images/burger-logo.png';
import classes from './Logo.css';

const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        {/* linking differently dynamically due to the way webpack will bundle */}
        <img src={burgerLogo} alt="Burger logo" />
    </div>
);

export default logo;