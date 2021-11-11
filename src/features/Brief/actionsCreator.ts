import {
  SET_BRIEF,
  LOAD_BRIEFS,
  LOAD_PRODUCTS,
  FILTER,
} from "../../share/constants/ActionTypes";

export function mapStateToProps(state: any) {
  return {
    briefs: state.briefReducer.briefs,
    products: state.briefReducer.products,
    filterTool: state.briefReducer.filterTool,
  };
}

export function mapDispatchToProps(dispatch: any) {
  return {
    setBrief: (payload: { type: "SET_BRIEF"; payload: Brief }) =>
      dispatch({ type: SET_BRIEF, payload }),
    loadBriefs: (payload: { type: "LOAD_BRIEFS"; payload: Array<Brief> }) =>
      dispatch({ type: LOAD_BRIEFS, payload }),
    loadProducts: (payload: {
      type: "LOAD_PRODUCTS";
      payload: Array<Product>;
    }) => dispatch({ type: LOAD_PRODUCTS, payload }),
    loadFilter: (payload = {}) => dispatch({ type: FILTER, payload }),
  };
}
