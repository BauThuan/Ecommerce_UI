// authHooks.js
import { useMutation } from "@tanstack/react-query";
import apiClient from "../../../api/apiClient";
import apiPaths from "../../../api/apiPath";

interface IAuthen {
  identifier: string;
  password: string;
}

export const signIn = async (loginCredentials: IAuthen) => {
  try {
    const response = await apiClient.post(apiPaths.auth.login, loginCredentials);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const useSignIn = () => {
  return useMutation({
    mutationFn: signIn,
    onSuccess: (data) => {
      localStorage.setItem("token", data.jwt);
    },
    onError: (error) => {
      console.error("Sign-in failed:", error);
    },
  });
};
