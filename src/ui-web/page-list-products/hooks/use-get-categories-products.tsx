import { useQuery } from "@tanstack/react-query";
import { API_CLIENT } from "../../../api";
import { API_PATHS } from "../../../api";

export const getListAllCategories = async () => {
  try {
    const response = await API_CLIENT.get(API_PATHS.CATEGORIES.GET_ALL_CATEGORIES);
    return response.data.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getListAllProducts = async () => {
  try {
    const response = await API_CLIENT.get(API_PATHS.PRODUCTS.GET_ALL_PRODUCTS);
    return response.data.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
const fetchCategoriesAndProducts = async () => {
  const [categories, products] = await Promise.all([getListAllCategories(), getListAllProducts()]);
  return { categories, products };
};
export const useGetCategoriesAndProducts = (enabled: boolean = true) => {
  return useQuery({
    queryKey: ["categoriesAndProducts"],
    queryFn: fetchCategoriesAndProducts,
    enabled: enabled,
  });
};
