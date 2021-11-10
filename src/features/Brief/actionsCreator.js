import { SET_BRIEF, GET_BRIEF } from "../../share/constants/ActionTypes";

export function mapStateToProps(state) {
  return { ...state.briefReducer };
}

export function mapDispatchToProps(dispatch) {
  return {
    setNewProduct: (payload) => {
      console.log("payload",payload);
      dispatch({ type: SET_BRIEF, payload });
    },
  };
}

// userAuthState: (payload) =>
//       dispatch({ type: SET_USER_AUTHENTICATION, payload }),
//     userExpires: (payload) =>
//       dispatch({ type: SET_USER_AUTH_EXPIRATION, payload }),
//     userUpdate: () => dispatch({ type: POP_USER_AUTHENTICATION }),
//     userLogout: () => dispatch({ type: DEL_USER_AUTHENTICATION }),
