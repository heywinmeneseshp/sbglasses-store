import { useState } from "react";

const initialState = {
  cart: [],
  windows: false,
};

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const addToCart = (product) => {
    setState({
      ...state,
      cart: [...state.cart, product],
    });
  };

  const removeProduct = (indexValue) => {
    setState({
      ...state,
      cart: state.cart.filter( (_, index) => index != indexValue )
    })
  }

  const openWindows = () => {
    setState({
      ...state,
      windows: !state.windows
    })
}

  return {
    state,
    addToCart,
    removeProduct,
    openWindows,
  };
};

export default useInitialState;
