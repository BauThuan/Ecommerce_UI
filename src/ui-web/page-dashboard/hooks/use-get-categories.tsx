import { useQuery } from "@tanstack/react-query";
import apiClient from "../../../api/apiClient";
import apiPaths from "../../../api/apiPath";

// Hàm lấy danh sách tất cả các danh mục
export const getListAllCategories = async () => {
  try {
    const response = await apiClient.get(apiPaths.categories.getAll);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// Custom hook để sử dụng query
export const useGetCategories = (enabled = true) => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: getListAllCategories,
    enabled: enabled,
  });
};
