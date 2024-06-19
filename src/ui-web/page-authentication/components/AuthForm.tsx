import {
  PasswordInput,
  TextInput,
  Checkbox,
  Anchor,
  Group,
  Button,
  Box,
  useMantineTheme,
} from "@mantine/core";
import { IconMail, IconLock, IconLockOpen, IconBrandGoogleFilled } from "@tabler/icons-react";
import { useTranslationMessage } from "../../../hooks/use-translation-message";
import { useQueryParams } from "../../../hooks/use-query-params";
import { useEffect, useMemo } from "react";
import { SCREENS_NAME_AUTHEN } from "../constant";
// import { COOKIE_OPTIONS } from "../constant";
import { ContentHeader } from "./ContentHeader";
import { ContentFooter } from "./ContentFooter";
import { useMediaQueryScreen } from "../../../hooks/use-media-query";
import { useCustomForm } from "../../../hooks/use-custom-form";

import { useNavigate } from "react-router-dom";
import { appRouteConstants } from "../../../router/appRouteConstants";
// import Cookies from "js-cookie";

export const AuthForm = () => {
  const { getQueryParams } = useQueryParams();
  const { formatMessage } = useTranslationMessage();
  const { isMobile } = useMediaQueryScreen();
  const navigate = useNavigate();
  const form = useCustomForm();
  const theme = useMantineTheme();

  const showInputConfirmPassword = useMemo(() => {
    return getQueryParams === SCREENS_NAME_AUTHEN.SIGN_UP;
  }, [getQueryParams]);

  const handleSignIn = () => {
    window.history.replaceState(null, "", `/${appRouteConstants.WEBSITE_DASHBOARD.INDEX}`);
    navigate(`/${appRouteConstants.WEBSITE_DASHBOARD.INDEX}`, { replace: true });
  };

  // const saveLoginInfo = () => {
  //   const userInfo: string = "Hello";
  //   Cookies.set("authToken", userInfo, COOKIE_OPTIONS);
  //   Cookies.set("userId", userInfo, COOKIE_OPTIONS);
  //   Cookies.set("userName", userInfo, COOKIE_OPTIONS);
  // };

  useEffect(() => {
    if (!showInputConfirmPassword) {
      form.setFieldValue("confirmPassword", "");
    }
  }, [showInputConfirmPassword, form]);
  return (
    <Box
      h="100%"
      w={isMobile ? "100%" : "50%"}
      display="flex"
      pt={isMobile ? 50 : 70}
      sx={{
        flexDirection: "column",
        alignItems: "center",
        boxSizing: "border-box",
      }}
    >
      <ContentHeader />
      <Box w={isMobile ? "90%" : "50%"}>
        <form onSubmit={form.onSubmit((values) => console.log(values))}>
          <TextInput
            mt="sm"
            placeholder={formatMessage("Email")}
            key={form.key("email")}
            {...form.getInputProps("email")}
            rightSection={<IconMail size="20px" stroke={1.5} />}
          />
          <PasswordInput
            mt="sm"
            placeholder={formatMessage("Password")}
            key={form.key("password")}
            {...form.getInputProps("password")}
            visibilityToggleIcon={({ reveal }) =>
              reveal ? (
                <IconLockOpen size="20px" stroke={1.5} />
              ) : (
                <IconLock size="20px" stroke={1.5} />
              )
            }
          />

          {showInputConfirmPassword && (
            <PasswordInput
              mt="sm"
              placeholder={formatMessage("Confirm Password")}
              key={form.key("confirmPassword")}
              {...form.getInputProps("confirmPassword")}
              visibilityToggleIcon={({ reveal }) =>
                reveal ? (
                  <IconLockOpen size="20px" stroke={1.5} />
                ) : (
                  <IconLock size="20px" stroke={1.5} />
                )
              }
            />
          )}
          <Box
            mt={10}
            display="flex"
            sx={{
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Checkbox
              size="xs"
              sx={{
                fontWeight: 500,
                color: theme.colors.neutral[1],
              }}
              label={formatMessage("Set as default card")}
              onChange={(event) => {
                console.log(">>> check kerd", event.currentTarget.checked);
                // saveLoginInfo();
              }}
            />
            <Anchor
              href="#"
              sx={{
                fontWeight: 500,
                fontSize: 12,
                color: theme.colors.scarlet[9],
              }}
            >
              {formatMessage("Recovery Password")}
            </Anchor>
          </Box>
          <Group justify="flex-end" mt="md">
            <Button
              onClick={handleSignIn}
              color={theme.colors.autumn[0]}
              sx={{
                color: theme.colors.dark[0],
                fontWeight: 500,
              }}
              fullWidth
              type="submit"
            >
              {formatMessage("Login")}
            </Button>
            <Button
              justify="center"
              fullWidth
              leftSection={<IconBrandGoogleFilled />}
              variant="default"
              mt="md"
            >
              {formatMessage("Sign in with Gmail")}
            </Button>
          </Group>
        </form>
      </Box>
      <ContentFooter />
    </Box>
  );
};
