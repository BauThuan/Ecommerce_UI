// authHooks.js
import { useMutation } from "@tanstack/react-query";
import { API_CLIENT } from "../../../api";
import { API_PATHS } from "../../../api";
interface IAuthen {
  identifier: string;
  password: string;
}

export const signIn = async (loginCredentials: IAuthen) => {
  try {
    const response = await API_CLIENT.post(API_PATHS.AUTH.LOGIN, loginCredentials);
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
