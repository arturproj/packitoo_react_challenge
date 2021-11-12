import tree_db from "../../../db.json";
import { getBriefs, getProducts } from "./brief";

describe("Json-server API", () => {
  test("<> called briefs list", () => {
    getBriefs().then((bierfs) => expect(bierfs).toEqual(tree_db.briefs));
  });
  test("<> called products list", () => {
    getProducts().then((products) =>
      expect(products).toEqual(tree_db.products)
    );
  });
});
