import React, {Component} from 'react';
import classes from './Modal.css';
import Aux from '../../../hoc/Aux/Aux';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {

    // Can we control updating of OrderSummary, by changing the way Modal updates
    // Only update if show changes
    shouldComponentUpdate(nextProps, nextState) {
        // if (nextProps.show !== this.props.show) {
        //     return true;
        // }
        // The children of the component changed, so we have to check if nextProps.Children is different to this.props.children, to see the Spinner
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }

    componentWillUpdate() {
        console.log('[MODAL] Will Update')
    }

    render() {
        return(
            <Aux>
                <Backdrop
                    show={this.props.show}
                    clicked={this.props.modalClosed}
                />
                <div
                    className={classes.Modal}
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}>
                    {this.props.children}
                </div>
        </Aux>
        );
    }
}

export default Modal;

// const modal = (props) => (
//     <Aux>
//         <Backdrop
//             show={props.show}
//             clicked={props.modalClosed}
//         />
//         <div
//             className={classes.Modal}
//             style={{
//                 transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
//                 opacity: props.show ? '1' : '0'
//             }}>
//             {props.children}
//         </div>
//     </Aux>

// );

// export default modal;