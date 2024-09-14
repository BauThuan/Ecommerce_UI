import { Flex } from "@mantine/core";
// import { useTranslation } from "react-i18next";
import { MediaContent } from "../../components/MediaContent";
import { AuthForm } from "../../components/AuthForm";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { appRouteConstants } from "../../../../router/appRouteConstants";

export const PageSignIn = () => {
  const navigate = useNavigate();
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
    <Flex
      h="100vh"
      direction={{ base: "row", sm: "row" }}
      gap={{ base: "sm", sm: "lg" }}
      justify={{ base: "center", sm: "center" }}
      align={{ base: "center" }}
    >
      <MediaContent />
      <AuthForm />
      {/* <button onClick={() => changeLanguage("en")}>Switch to English</button>
      <button onClick={() => changeLanguage("vn")}>Switch to VN</button> */}
    </Flex>
  );
};
