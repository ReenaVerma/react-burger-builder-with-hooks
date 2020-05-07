import React from 'react';

import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

// array to build and loop through controls
const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' }
];

const buildControls = (props) => (

    <div className={classes.BuildControls}>
        {/* loop through controls to map each element of the array */}
        <p>Current Price:  <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map( ctrl => (
            <BuildControl
                key={ctrl.label}
                label={ctrl.label}
                // type={ctrl.type}
                added={() => props.ingredientAdded(ctrl.type)}
                removed={() => props.ingredientRemoved(ctrl.type)}
                disabled={props.disabled[ctrl.type]}
            />
        ))}
        <button
            className={classes.OrderButton}
            disabled={!props.purchaseable}
            onClick={props.ordered}>ORDER NOW</button>
    </div>

);

export default buildControls;