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
        {controls.map( ctrl => (
            <BuildControl
                key={ctrl.label}
                label={ctrl.label}
                // type={ctrl.type}
                added={() => props.ingredientAdded(ctrl.type)}
            />
        ))}
    </div>

);

export default buildControls;