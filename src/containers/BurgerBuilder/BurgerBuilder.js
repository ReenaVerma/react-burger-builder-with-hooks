import React, {Component }from 'react';
import Aux from '../../hoc/Aux/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import axios from '../../../src/axios-orders';

// USE CAPTIALS FOR GLOBAL CONST
const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

class BurgerBuilder extends Component {
    // Handle state of ingredients in Burger, in BurgerBuilder

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        purchaseable: false,
        purchasing: false,
        loading: false
    }

    updatePurchaseState = (ingredients) => {
        // const ingredients = {...this.state.ingredients};

        const sum = Object.keys(ingredients)
            .map(igkey => {
                return ingredients[igkey]; //return new value and replace the old value
            })
            .reduce((sum, el) => { //call reduce to turn this into a single number (the sum of all ingredients)
                return sum + el;
            }, 0); // 0 if there are no ingredients added

            this.setState({ purchaseable: sum > 0 });  //will be true or false. True if more than 1 ingredient
        };

    addIngredientHandler = (type) => {
        // need to know first what is the old ingredient count and access for given type
        const oldCount = this.state.ingredients[type];
        // calculate updated count
        const updatedCount = oldCount + 1;
        // State should be updated in an immutable way. So use spread operator first to create new object
        const updatedIngredients = {...this.state.ingredients};
        // Take new object and access the type. Then set the count value equal to updatedCount
        updatedIngredients[type] = updatedCount;

        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;

        this.setState({ totalPrice: newPrice, ingredients: updatedIngredients});
        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredientHandler = (type) => {
        // need to know first what is the old ingredient count and access for given type
        const oldCount = this.state.ingredients[type];

        if (oldCount <= 0) {
            return;  // nothing happens if we reduce the ingredients
        }

        // calculate updated count
        const updatedCount = oldCount - 1;
        // State should be updated in an immutable way. So use spread operator first to create new object
        const updatedIngredients = {...this.state.ingredients};
        // Take new object and access the type. Then set the count value equal to updatedCount
        updatedIngredients[type] = updatedCount;

        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;

        this.setState({ totalPrice: newPrice, ingredients: updatedIngredients});
        this.updatePurchaseState(updatedIngredients);
    }

    purchaseHandler = () => {
        this.setState({ purchasing: true });
    }

    purchaseCancelHandler = () => {
        this.setState({ purchasing: false });
    }

    purchaseContinueHandler = () => {
        // alert('You continue!');
        // Need to add .json when using Google Firebase

        this.setState({ loading: true});

        const order = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
            customer: {
                name: 'Reena Verma',
                address: {
                    street: '11231 Beverly Hills',
                    postCode: '90210',
                    country: 'United Kingdom'
                },
                email: 'reena@reena.com'
            },
            deliveryMethod: 'fastest'
        }
        axios.post('/orders.json', order)
        .then(response => {
            console.log('Axios.Post', response);
            this.setState({ loading: false, purchasing: false });
        })
        .then(error => {
            console.log(error);
            this.setState({ loading: false, purchasing: false });
        });
    }

    // purcaseCancelHandler = () => {
    //     alert('You cancelled!');
    // }

    render() {

        const disableInfo = {
            ...this.state.ingredients
        };

        for (let key in disableInfo) {
            // true will be assigned if disabled
            disableInfo[key] = disableInfo[key] <= 0;
            console.log('key', key);
            console.log('disableInfo[key]', disableInfo[key]);
        }
        // {salad: true, meat: false...}

        let orderSummary = <OrderSummary
            ingredients={this.state.ingredients}
            purchaseCancelled={this.purchaseCancelHandler}
            purchaseContinued={this.purchaseContinueHandler}
            price={this.state.totalPrice} />;

        if (this.state.loading) {
            orderSummary = <Spinner />
        }

        return(
            <Aux>
                <Modal
                    show={this.state.purchasing}
                    modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}
                        {/* <OrderSummary
                            ingredients={this.state.ingredients}
                            purchaseCancelled={this.purchaseCancelHandler}
                            purchaseContinued={this.purchaseContinueHandler}
                            price={this.state.totalPrice}
                        /> */}
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disableInfo}
                    price={this.state.totalPrice}
                    purchaseable={this.state.purchaseable}
                    ordered={this.purchaseHandler}
                />
            </Aux>
        );
    }
}

export default BurgerBuilder;