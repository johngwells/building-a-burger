import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';
import { removeIngredient } from '../actions/burgerBuilder';

const initialState = {
  ingredients: null,
  totalPrice: 4,
  error: false
};

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.3
}

const addIngredient = (state, action) => {
  const updatedIngredient = { [action.ingredientName]: state.ingredients[action.ingredientName] + 1 }
  const updatedIngredients = updateObject(state.ingredients, updatedIngredient);
  const updatedState = {
    ingredients: updatedIngredients,
    totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
  }
  return updateObject(state, updatedState);
}

const removeIngredint = (state, action) => {
  return {
    ...state,
    ingredients: {
      [action.ingredientName]: state.ingredients[action.ingredientName] - 1
    }
  };
}

const setIngredients = (state, action) => {
  return updateObject(state, {
    // ingredients: action.ingredients,
    // lose flexibility because of this, but since
    // limited ingredients its fine.
    ingredients: {
      salad: action.ingredients.salad,
      bacon: action.ingredients.bacon,
      cheese: action.ingredients.cheese,
      meat: action.ingredients.meat
    },
    totalPrice: 4,
    error: false
  });
}

const fetchIngrdientsFailed = (state, action) => {
  return updateObject(state, { error: true });
}
// ...state doesn't go deeply. spread again in ingredients object
// using utility.js to refactor code
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT: return addIngredient(state, action);
    case actionTypes.REMOVE_INGREDIENT: return removeIngredient(state, action);
    case actionTypes.SET_INGREDIENTS: return setIngredients(state, action);
    case actionTypes.FETCH_INGREDIENTS_FAILED: return fetchIngrdientsFailed(state, action);
    default:
      return state;
  }
};

export default reducer;