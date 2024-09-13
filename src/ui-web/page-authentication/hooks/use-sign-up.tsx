// authHooks.js
import { useMutation } from "@tanstack/react-query";
import apiClient from "../../../api/apiClient";
import apiPaths from "../../../api/apiPath";

interface IAuthen {
  username: string;
  email: string;
  password: string;
  role: number;
}

export const signUp = async (registerCredentials: IAuthen) => {
  try {
    const response = await apiClient.post(apiPaths.auth.register, registerCredentials);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const useSignUp = () => {
  return useMutation({
    mutationFn: signUp,
    onSuccess: (data) => {
      console.log(">>> check data", data);
    },
    onError: (error) => {
      console.error("Sign-up failed:", error);
    },
  });
};
