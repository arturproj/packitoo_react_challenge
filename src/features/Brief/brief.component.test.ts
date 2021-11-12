import { createStore } from "redux";
import rootReducer from "../../share/reducers";
import { briefStateToProps, briefDispatchToProps } from "./actionsCreator";
import tree_db from "../../../db.json";
import { LOAD_BRIEFS, LOAD_PRODUCTS } from "../../share/constants/ActionTypes";

const store = createStore(rootReducer);
describe("BRIEF store created", () => {
  it("should return the initial state", () => {
    expect(briefStateToProps(store.getState()).briefs).toEqual([]);
  });

  it("SAVE brief dispatch ", () => {
    const payload = {
      title: "Jan Vermeer",
      productId: 1,
      comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      id: 1,
    };

    briefDispatchToProps(store.dispatch).setBrief(payload);

    expect(briefStateToProps(store.getState()).briefs).toEqual([payload]);
  });

  it("LOAD briefs dispatch ", () => {
    const payload = [
      ...briefStateToProps(store.getState()).briefs,
      {
        id: 2,
        title: "Round box for wine",
        comment: "I need 1000 round boxes",
        productId: 3,
      },
    ];

    briefDispatchToProps(store.dispatch).loadBriefs(payload);

    expect(briefStateToProps(store.getState()).briefs).toEqual(payload);
  });

  it("LOAD products dispatch ", () => {
    briefDispatchToProps(store.dispatch).loadProducts(tree_db.products);

    expect(briefStateToProps(store.getState()).products).toEqual(
      tree_db.products
    );
  });
});
