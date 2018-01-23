import * as actionTypes from './actions';

const initialState = {
  ingredients: {
    salad: 0,
    bacon: 0,
    cheese: 0,
    meat: 0
  },
  totalPrice: 4,
};

// ...state doesn't go deeply. spread again in ingredients object
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENTS:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          // we want to overwrite the given ingredient. get the payload of this action
          // [] does not create an array. es6 syntax: this is to dynamically overwrite a property in a given javascript object 
          [action.ingredientName]: state.ingredients[action.ingredientName] + 1
        }
      };
    case actionTypes.REMOVE_INGREDIENT:
      return {
        ...state,
        [action.ingredientName]: state.ingredients[action.ingredientName] - 1
      };
    default:
      return state;
  }
};

export default reducer;