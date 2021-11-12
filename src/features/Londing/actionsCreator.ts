import { ON_LOADING, OFF_LOADING } from "../../share/constants/ActionTypes";

export function loadingStateToProps(state: any) {
  return { ...state.loadingReducer };
}

export function loadingDispatchToProps(dispatch: any) {
  return {
    runLoading: () => dispatch({ type: ON_LOADING }),
    stopLoading: () => setTimeout(() => dispatch({ type: OFF_LOADING }), 2000),
  };
}

export const selectStatus = (state: any) => state.status;
