import { useTranslation } from "react-i18next";

const YourComponent = () => {
  const { t, i18n } = useTranslation();
  console.log(">>> check data", localStorage.setItem("language", "en"));
  const changeLanguage = (lang) => {
    try {
      localStorage.setItem("language", lang);
      console.log(">>> check data", localStorage.setItem("language", "en"));
      console.log(">> check lang", lang);
      i18n.changeLanguage(lang);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <button
        onClick={() => {
          changeLanguage("en"), localStorage.setItem("language", "en");
        }}
      >
        Switch to English
      </button>
      <button onClick={() => changeLanguage("vn")}>Chuyển sang tiếng Việt</button>
      <h1>{t("welcome")}</h1>
      <p>{t("description")}</p>
    </div>
  );
};

export default YourComponent;
