import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from '../Burger/BurgerIngredient/BurgerIngredient';
// functional
// using curley braces as we want to return JSX

const burger = (props) => {

    //convert object into an array, so we can loop through it?
    const transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_,i) => {
                return <BurgerIngredient key={igKey + i} type={igKey} />
            }); //create an Array with this [,]
        });

    return(
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            {/* <BurgerIngredient type="cheese"/>
            <BurgerIngredient type="meat"/> */}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
}

export default burger;