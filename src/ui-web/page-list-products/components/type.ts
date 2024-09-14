interface ICategoryItem {
  attributes: {
    description: string;
    name: string;
    price: string;
    oldPrice: string;
  };
}

interface IProductIrem extends ICategoryItem {}

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
  listProducts: IProductIrem[];
};
