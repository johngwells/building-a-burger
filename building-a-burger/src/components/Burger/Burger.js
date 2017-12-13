import React from 'react';

import classes from './Burger.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
  // Object. which extracts the keys from the object turns into an Array
  let transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <BurgerIngredient key={igKey + i} type={igKey} />;
      });
    })
    // flatten the array so it will turn each element into an array of objects
    // state in (burgerBuilder) must be other than 0 on all ingredients otherwise its an empty array
    .reduce((arr, el) => {
      return arr.concat(el)
    }, []);
  
  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please add Ingredients!</p>
  }
  console.log(transformedIngredients);
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
        {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;