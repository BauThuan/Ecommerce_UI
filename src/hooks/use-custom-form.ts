import { useForm, UseFormReturnType } from "@mantine/form";
import { useTranslationMessage } from "./use-translation-message";
import { VALIDATE_FORM_MESSAGE } from "../constant";
interface FormValues {
  email: string;
  password: string;
  confirmPassword: string;
  name?: string;
  address?: string;
  phoneNumber?: string;
  quantity?: number;
  price?: number;
}

export const useCustomForm = (): UseFormReturnType<FormValues> => {
  const { formatMessage } = useTranslationMessage();
  const form = useForm<FormValues>({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
      name: "",
      address: "",
      phoneNumber: "",
      quantity: 0,
      price: 0,
    },
    validate: {
      email: (value: string) =>
        /^\S+@\S+$/.test(value) ? null : formatMessage(VALIDATE_FORM_MESSAGE.EMAIL),
      confirmPassword: (value, values) =>
        value !== values.password ? formatMessage(VALIDATE_FORM_MESSAGE.PASSWORD) : null,
      name: (value) =>
        value && value.length < 2 ? formatMessage(VALIDATE_FORM_MESSAGE.NAME) : null,
      address: (value) => (value && value ? null : formatMessage(VALIDATE_FORM_MESSAGE.ADDRESS)),
      phoneNumber: (value) =>
        value && /^\d{10,15}$/.test(value)
          ? null
          : formatMessage(VALIDATE_FORM_MESSAGE.PHONE_NUMBER),
      quantity: (value) =>
        value && value > 0 ? null : formatMessage(VALIDATE_FORM_MESSAGE.QUANTITY),
      price: (value) => (value && value > 0 ? null : formatMessage(VALIDATE_FORM_MESSAGE.PRICE)),
    },
  });
  return form;
};
