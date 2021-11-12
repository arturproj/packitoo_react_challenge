/// <reference types="react-scripts" />

type BriefType = {
  id: number;
  title: string;
  comment: string;
  productId: number;
};

type ProductType = {
  id: number;
  name: string;
};

type LondingState = {
  status: Boolean;
};

type BriefState = {
  briefs: Array<Brief>;
  products: Array<Product>;
  filterTool: {
    active: Boolean;
    product: Product | null;
  };
};
