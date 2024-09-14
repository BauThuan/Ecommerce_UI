import { useQuery } from "@tanstack/react-query";
import { API_CLIENT } from "../../../api";
import { API_PATHS } from "../../../api";

export const getListAllProducts = async () => {
  try {
    const response = await API_CLIENT.get(API_PATHS.PRODUCTS.GET_ALL_PRODUCTS);
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
};

export const useGetProducts = (enabled: boolean = true) => {
  return useQuery({
    queryKey: ["products"],
    queryFn: getListAllProducts,
    enabled: enabled,
  });
};
