import { BrowserRouter } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import { App } from "./router/index";
import { emotionTransform, MantineEmotionProvider } from "@mantine/emotion";
import { theme } from "./style/theme.styles";
import { useChangeColorSchemeStore } from "./store/use-change-color-scheme";
import { I18nextProvider } from "react-i18next";
import { ActionBar } from "./ui-web/action-bar";
import i18n from "./i18n/locale.language";
import "@mantine/core/styles.css";

export const Root = () => {
  const colorScheme = useChangeColorSchemeStore((state) => state.colorScheme);
  return (
    <MantineProvider
      forceColorScheme={colorScheme}
      stylesTransform={emotionTransform}
      withCssVariables={false}
      theme={theme}
    >
      <MantineEmotionProvider>
        <I18nextProvider i18n={i18n}>
          <BrowserRouter>
            <div>
              <ActionBar />
              <App />
            </div>
          </BrowserRouter>
        </I18nextProvider>
      </MantineEmotionProvider>
    </MantineProvider>
  );
};
