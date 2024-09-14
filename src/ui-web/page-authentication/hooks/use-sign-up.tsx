// authHooks.js
import { useMutation } from "@tanstack/react-query";
import { API_CLIENT } from "../../../api";
import { API_PATHS } from "../../../api";

interface IAuthen {
  username: string;
  email: string;
  password: string;
  role: number;
}

export const signUp = async (registerCredentials: IAuthen) => {
  try {
    const response = await API_CLIENT.post(API_PATHS.AUTH.REGISTER, registerCredentials);
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
