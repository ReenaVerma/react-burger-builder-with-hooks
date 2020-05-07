import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import classes from './Layout.css';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {

    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState({ showSideDrawer: false });
    }

    sideDrawerToggleHandler = () => {
        // Don't do it like this, because due to async nature of setState, may lead to unexpected outcomes
        // this.setState({ showSideDrawer: !this.state.showSideDrawer});
        // expect preVState as an input
        // Then return obj you want to merge as a newState
        this.setState((prevState) => {
            console.log('prevState', prevState);
            return { showSideDrawer: !prevState.showSideDrawer};
        })
    };

    render() {
        return (
            <Aux>
                <Toolbar
                    drawerToggledClicked={this.sideDrawerToggleHandler}
                />
                <SideDrawer
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler}
                />
                <main className={classes.Content}>
                    {this.children}
                </main>
            </Aux>
        )
    };
}

// const layout = (props) => (
//     <Aux>
//         <Toolbar />
//         <SideDrawer />
//         <main className={classes.Content}>
//             {/* output the component we wrap with this layout*/}
//             {props.children}
//         </main>
//     </Aux>
// );

export default Layout;