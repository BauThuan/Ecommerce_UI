interface ICategoryItem {
  attributes: {
    name: string;
  };
}

interface IProductItem {
  attributes: ICategoryItem["attributes"] & {
    description: string;
    price: string;
    oldPrice: string;
  };
}
export type CategorieProps = {
  w?: string;
  h?: string;
  display?: string;
  alignItems?: string;
  direction?: string;
  justifyContent?: string;
  listCategories: ICategoryItem[];
};

export type ProductProps = {
  listProducts: IProductItem[];
};
