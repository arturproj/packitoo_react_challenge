import {
  SET_BRIEF,
  LOAD_BRIEFS,
  LOAD_PRODUCTS,
} from "../../share/constants/ActionTypes";

export function mapStateToProps(state) {
  return {
    briefs: state.briefReducer.briefs,
    products: state.briefReducer.products,
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    setBrief: (payload) => dispatch({ type: SET_BRIEF, payload }),
    loadBriefs: (payload) => dispatch({ type: LOAD_BRIEFS, payload }),
    loadProducts: (payload) => dispatch({ type: LOAD_PRODUCTS, payload }),
  };
}
