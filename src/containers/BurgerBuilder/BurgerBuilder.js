import React, {Component }from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

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
            meat: 1
        },
        totalPrice: 4
    }

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
    }

    removeIngredientHandler = (type) => {

    }

    render() {
        return(
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                />
            </Aux>
        );
    }
}

export default BurgerBuilder;