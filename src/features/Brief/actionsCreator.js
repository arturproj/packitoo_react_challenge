import {
  SET_BRIEF,
  LOAD_BRIEFS,
  LOAD_PRODUCTS,
  FILTER,
} from "../../share/constants/ActionTypes";
import { createSelector } from "reselect";

export function mapStateToProps(state) {
  return {
    briefs: state.briefReducer.briefs,
    products: state.briefReducer.products,
    filter: state.briefReducer.filterTool,
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    setBrief: (payload) => dispatch({ type: SET_BRIEF, payload }),
    loadBriefs: (payload) => dispatch({ type: LOAD_BRIEFS, payload }),
    loadProducts: (payload) => dispatch({ type: LOAD_PRODUCTS, payload }),
    loadFilter: (payload = {}) => dispatch({ type: FILTER, payload }),
  };
}

export const selectBriefs = (state) => state.briefs;

export const selectFilters = (state) => state.filterID;

const reselect = createSelector(
  selectBriefs,
  selectFilters,
  (items, filterID) => items.find((x) => x.productId === filterID)
);
