import * as types from "../../share/constants/ActionTypes";


export const State: LondingState = { status: true };
type Action = { type: "ON_LOADING" } | { type: "OFF_LOADING" };

function reducer(state = State, action: Action): LondingState {
  switch (action.type) {
    case types.ON_LOADING:
      return { ...state, status: true };
    case types.OFF_LOADING:
      return { ...state, status: false };
    default:
      return state;
  }
}

export default reducer;
