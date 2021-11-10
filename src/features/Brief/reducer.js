import * as types from "../../share/constants/ActionTypes";

const initialState = {
  briefs: [],
};
function reducer(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case types.GET_BRIEF:
      state.briefs = action.payload.briefs;
      return state;
    case types.SET_BRIEF:
      state.briefs.push(action.payload);
      return state;
    default:
      return state;
  }
}

export default reducer;
