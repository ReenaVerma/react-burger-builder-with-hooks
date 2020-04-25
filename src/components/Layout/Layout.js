import React from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.css';

const layout = (props) => (
    <Aux>
        <div>Tool bar, SideDrawer, Backdrop</div>
        <main className={classes.Content}>
            {/* output the component we wrap with this layout*/}
            {props.children}
        </main>
    </Aux>
);

export default layout;