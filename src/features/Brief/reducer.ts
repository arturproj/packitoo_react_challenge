import * as types from "../../share/constants/ActionTypes";

export const State: BriefState = {
  briefs: [],
  products: [],
  filterTool: {
    active: false,
    product: null,
  },
};

type Action =
  | { type: "SET_BRIEF"; payload: BriefType}
  | { type: "SET_PRODUCT"; payload: ProductType }
  | { type: "LOAD_BRIEFS"; payload: Array<BriefType> }
  | { type: "LOAD_PRODUCTS"; payload: Array<ProductType> }
  | {
      type: "DUMP_ANY";
      payload: {
        briefs: Array<BriefType>;
        products: Array<ProductType>;
      };
    }
  | { type: "FILTER"; payload: { active?: Boolean; product?: ProductType } };

function reducer(state = State, action: Action): BriefState {
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
