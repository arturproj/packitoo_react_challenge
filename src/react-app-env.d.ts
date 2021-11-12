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
    product: Product | null;
  };
};

