// import { useTranslation } from "react-i18next";
import { AuthForm } from "./components/AuthForm";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { appRouteConstants } from "../../router/appRouteConstants";
import { Box, useMantineTheme } from "@mantine/core";

export const PageAuthentication = () => {
  const navigate = useNavigate();
  const theme = useMantineTheme();

  const tokenRef = localStorage.getItem("token");
  // const { i18n } = useTranslation();

  // const changeLanguage = (lang: string) => {
  //   localStorage.setItem("language", lang);
  //   i18n.changeLanguage(lang);
  // };
  useEffect(() => {
    if (tokenRef) navigate(`/${appRouteConstants.WEBSITE_DASHBOARD.INDEX}`, { replace: true });
  }, [navigate, tokenRef]);
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100vh",
        zIndex: 1500,
        backgroundColor: theme.colors.dark[9],
        position: "fixed",
        top: 0,
        left: 0,
        overflow: "hidden",
      }}
    >
      <AuthForm />
    </Box>
  );
};
