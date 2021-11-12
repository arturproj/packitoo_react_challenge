import {
  SET_BRIEF,
  LOAD_BRIEFS,
  LOAD_PRODUCTS,
  FILTER,
} from "../../share/constants/ActionTypes";
import { createSelector } from "reselect";

export function briefStateToProps(state: any) {
  return { ...state.briefReducer };
}

export function briefDispatchToProps(dispatch: any) {
  return {
    setBrief: (payload: BriefType) => dispatch({ type: SET_BRIEF, payload }),
    loadBriefs: (payload: Array<BriefType>) =>
      dispatch({ type: LOAD_BRIEFS, payload }),
    loadProducts: (payload: Array<ProductType>) =>
      dispatch({ type: LOAD_PRODUCTS, payload }),
    loadFilter: (payload: object = {}) => dispatch({ type: FILTER, payload }),
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
      ? briefs.filter((brief: BriefType) => brief.productId === filterTool.id())
      : [...briefs]
);
