import { createStore } from "redux";
import rootReducer from "../../share/reducers";
import { loadingStateToProps, loadingDispatchToProps } from "./actionsCreator";
import { ON_LOADING, OFF_LOADING } from "../../share/constants/ActionTypes";

const store = createStore(rootReducer);

describe("Loading Status", () => {
  it("should return the initial state", () => {
    expect(loadingStateToProps(store.getState()).status).toEqual(true);
  });

  it("should ON dispatch ", () => {
    const dispatch = jest.fn(store.dispatch);

    loadingDispatchToProps(dispatch).runLoading();
    expect(dispatch.mock.calls[0][0]).toEqual({ type: ON_LOADING });
  });
});
