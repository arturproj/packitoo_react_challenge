import * as types from "../../share/constants/ActionTypes";

type Action =
  | { type: "SET_BRIEF"; payload: Brief }
  | { type: "SET_PRODUCT"; payload: Product }
  | { type: "LOAD_BRIEFS"; payload: Array<Brief> }
  | { type: "LOAD_PRODUCTS"; payload: Array<Product> }
  | {
      type: "DUMP_ANY";
      payload: {
        briefs: Array<Brief>;
        products: Array<Product>;
      };
    }
  | { type: "FILTER"; payload: { active?: Boolean; product?: Product } };

const State: ReducerState = {
  briefs: [],
  products: [],
  filterTool: {
    active: false,
    product: null,
  },
};
function reducer(state = State, action: Action): ReducerState {
  switch (action.type) {
    case types.SET_BRIEF:
      let { briefs } = state;
      let brief = action.payload;
      briefs.push(brief);
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
    case types.FILTER:
      return {
        ...state,
        filterTool: {
          active: action.payload.active || false,
          product: action.payload.product || null,
        },
      };
    default:
      return { ...state };
  }
}

export default reducer;
