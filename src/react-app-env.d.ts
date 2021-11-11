/// <reference types="react-scripts" />

type Brief = {
  id: number;
  title: string;
  comment: string;
  productId: number;
};

type Product = {
  id: number;
  name: string;
};

type ReducerState = {
  briefs: Array<Brief>;
  products: Array<Product>;
  filterTool: {
    active: Boolean;
    product: object | null;
  };
};

type Action =
  | { type: "SET_BRIEF"; payload: Brief }
  | { type: "SET_PRODUCT"; payload: Product }
  | { type: "LOAD_BRIEFS"; payload: Array<Brief> }
  | { type: "LOAD_PRODUCTS"; payload: Array<Product> }
  | {
      type: "DUMP_ANY";
      payload: {
        briefs: Array<Brief>;
        products: Array<Product>;
      };
    }
  | { type: "FILTER"; payload: { active?: Boolean; product?: Product } };
