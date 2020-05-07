import React, {Component}  from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

// Changed to class component, so we can add lifecycle hooks and see when component is rendered/updated

class OrderSummary extends Component {

    componentWillUpdate() { 
        console.log('[ORDER SUMMARY: COMPONENT WILL UPDATE');
    }
    render() {
        // expect to get ingredients in obj format
        const ingredientSummary = Object.keys(this.props.ingredients)
        .map(igkey => {
            return <li key={igkey}>
                <span style={{textTransform: 'captialize'}}>{igkey}</span>: {this.props.ingredients[igkey]}</li>
        });

        return (
            <Aux>
                <h3>Your Order:</h3>
                <p>A delicious burger with the following ingredients</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price: £{this.props.price.toFixed(2)}</strong></p>
                <p>Continue to checkout?</p>
                <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
            </Aux>
        );

    };
}

export default OrderSummary;




// const orderSummary = (props) => {

//     // expect to get ingredients in obj format
//     const ingredientSummary = Object.keys(props.ingredients)
//         .map(igkey => {
//             return <li key={igkey}>
//                 <span style={{textTransform: 'captialize'}}>{igkey}</span>: {props.ingredients[igkey]}</li>
//         });

//     return (
//         <Aux>
//             <h3>Your Order:</h3>
//             <p>A delicious burger with the following ingredients</p>
//             <ul>
//                 {ingredientSummary}
//             </ul>
//             <p><strong>Total Price: £{props.price.toFixed(2)}</strong></p>
//             <p>Continue to checkout?</p>
//             <Button btnType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
//             <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
//         </Aux>
//     );

// };

// export default orderSummary;
