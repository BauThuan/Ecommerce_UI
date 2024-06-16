import { useForm, UseFormReturnType } from "@mantine/form";
import { useTranslationMessage } from "./use-translation-message";
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
      email: (value: string) => (/^\S+@\S+$/.test(value) ? null : formatMessage("Invalid email")),
      confirmPassword: (value, values) =>
        value !== values.password ? formatMessage("Passwords did not match") : null,
      name: (value) => (value && value.length < 2 ? "Name must have at least 2 letters" : null),
      address: (value) => (value && value ? null : formatMessage("Address is required")),
      phoneNumber: (value) =>
        value && /^\d{10,15}$/.test(value) ? null : formatMessage("Invalid phone number"),
      quantity: (value) =>
        value && value > 0 ? null : formatMessage("Quantity must be greater than 0"),
      price: (value) => (value && value > 0 ? null : formatMessage("Price must be greater than 0")),
    },
  });

  return form;
};
