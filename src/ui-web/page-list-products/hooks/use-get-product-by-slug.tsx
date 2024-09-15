import { useQuery } from "@tanstack/react-query";
import { API_CLIENT } from "../../../api";
import { API_PATHS } from "../../../api";

const getProductBySlug = async (slug: string) => {
  try {
    const response = await API_CLIENT.get(API_PATHS.PRODUCTS.GET_PRODUCTS_BY_SLUG(slug));
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const useGetProductsBySlug = (enabled: boolean = true, slug: string) => {
  return useQuery({
    queryKey: ["productsBySlug", slug],
    queryFn: () => getProductBySlug(slug), // Sử dụng arrow function để trì hoãn việc gọi hàm
    enabled: enabled,
  });
};
