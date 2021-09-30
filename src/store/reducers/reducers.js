// initial state of products
const productState = {
  products: [],
};

// reducers
const productsReducer = (state = productState, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        products: [...state.products, action.product],
      };
    case "REMOVE":
      const itemIndex = state.products.findIndex(
        (product) => product.id === action.id
      );
      const newProducts = state.products.filter(
        (product, index) => index !== itemIndex
      );
      return {
        ...state,
        products: [...newProducts],
      };
    default:
      return state;
  }
};

export default productsReducer;
