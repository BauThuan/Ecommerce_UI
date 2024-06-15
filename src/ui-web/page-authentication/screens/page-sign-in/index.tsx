import { Flex } from "@mantine/core";
// import { useTranslation } from "react-i18next";
import { MediaContent } from "../../components/MediaContent";
import { AuthForm } from "../../components/AuthForm";

export const PageSignIn = () => {
  // const { i18n } = useTranslation();

  // const changeLanguage = (lang: string) => {
  //   localStorage.setItem("language", lang);
  //   i18n.changeLanguage(lang);
  // };
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
