import {
  SET_BRIEF,
  LOAD_BRIEFS,
  LOAD_PRODUCTS,
  FILTER,
} from "../../share/constants/ActionTypes";
import { createSelector } from "reselect";

export function mapStateToProps(state: any) {
  return { ...state.briefReducer };
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

export const selectBriefs = (state: any) => state.briefs;

export const selectProducts = (state: any) => state.products;

export const selectFilterTool = (state: any) => {
  return {
    active: () => state.filterTool.active,
    id: () => (state.filterTool.product ? state.filterTool.product.id : null),
    product: () =>
      state.filterTool.product ? state.filterTool.product.name : null,
  };
};

export const filtredBriefs = createSelector(
  selectFilterTool,
  selectBriefs,
  (filterTool, briefs) =>
    filterTool.active() && filterTool.id()
      ? briefs.filter((brief: Brief) => brief.productId === filterTool.id())
      : [...briefs]
);
