interface CategoryItem {
  attributes: {
    name: string;
    // Các thuộc tính khác của attributes nếu cần
  };
}
export type CategorieProps = {
  w?: string;
  h?: string;
  display?: string;
  alignItems?: string;
  direction?: string;
  justifyContent?: string;
  listCategories?: CategoryItem[];
};
