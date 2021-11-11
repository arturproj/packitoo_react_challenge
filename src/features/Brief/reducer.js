import * as types from "../../share/constants/ActionTypes";

const initialState = {
  briefs: [],
  products: [],
};
function reducer(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case types.SET_BRIEF:
      let { briefs } = state;
      briefs.push(action.payload);
      return { ...state, briefs };
    case types.SET_PRODUCT:
      let { products } = state;
      products.push(action.payload);
      return { ...state, products };
    case types.LOAD_BRIEFS:
      return {
        ...state,
        briefs: [...action.payload],
      };
    case types.LOAD_PRODUCTS:
      return {
        ...state,
        products: [...action.payload],
      };
    case types.DUMP_ANY:
      return {
        ...state,
        briefs: action.payload.briefs,
        products: action.payload.products,
      };
    default:
      return { ...state };
  }
}

export default reducer;
