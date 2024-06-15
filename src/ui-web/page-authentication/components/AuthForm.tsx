import { useForm } from "@mantine/form";
import { PasswordInput, TextInput, Group, Button, Box } from "@mantine/core";
import { useTranslationMessage } from "../../../hooks/use-translation-message";
import { useQueryParams } from "../../../hooks/use-query-params";
import { useEffect, useMemo } from "react";
import { SCREENS_NAME_AUTHEN } from "../constant";
export const AuthForm = () => {
  const { getQueryParams } = useQueryParams();
  const { formatMessage } = useTranslationMessage();

  const showInputConfirmPassword = useMemo(() => {
    return getQueryParams === SCREENS_NAME_AUTHEN.SIGN_UP;
  }, [getQueryParams]);

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      email: "",
      password: "secret",
      confirmPassword: "sevret",
    },

    validate: {
      email: (value: string) => (/^\S+@\S+$/.test(value) ? null : formatMessage("Invalid email")),
      confirmPassword: (value, values) =>
        value !== values.password ? "Passwords did not match" : null,
    },
  });

  useEffect(() => {
    if (!showInputConfirmPassword) {
      form.setFieldValue("confirmPassword", "");
    }
  }, [showInputConfirmPassword, form]);

  return (
    <Box
      h="100%"
      w="50%"
      bg="red"
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <Box w="50%">
        <form onSubmit={form.onSubmit((values) => console.log(values))}>
          <TextInput
            mt="sm"
            placeholder={formatMessage("Email")}
            key={form.key("email")}
            {...form.getInputProps("email")}
          />
          <PasswordInput
            mt="sm"
            placeholder={formatMessage("Password")}
            key={form.key("password")}
            {...form.getInputProps("password")}
          />

          {showInputConfirmPassword && (
            <PasswordInput
              mt="sm"
              placeholder={formatMessage("Confirm Password")}
              key={form.key("confirmPassword")}
              {...form.getInputProps("confirmPassword")}
            />
          )}

          <Group justify="flex-end" mt="md">
            <Button type="submit">Submit</Button>
          </Group>
        </form>
      </Box>
    </Box>
  );
};
