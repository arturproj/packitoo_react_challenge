import * as types from "../../share/constants/ActionTypes";

type StateType = {
  status: Boolean;
};
const State: StateType = { status: true };
type Action = { type: "ON_LOADING" } | { type: "OFF_LOADING" };

function reducer(state = State, action: Action): StateType {
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
