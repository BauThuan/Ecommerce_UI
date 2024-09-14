import { BrowserRouter } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import { App } from "./router/index";
import { emotionTransform, MantineEmotionProvider } from "@mantine/emotion";
import { theme } from "./style/theme.styles";
import { useChangeColorSchemeStore } from "./store/use-change-color-scheme";
import { I18nextProvider } from "react-i18next";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import i18n from "./i18n/locale.language";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";

export const Root = () => {
  const colorScheme = useChangeColorSchemeStore((state) => state.colorScheme);
  const queryClient = new QueryClient();
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
            <QueryClientProvider client={queryClient}>
              <ReactQueryDevtools initialIsOpen={false} />
              <App />
            </QueryClientProvider>
          </BrowserRouter>
        </I18nextProvider>
      </MantineEmotionProvider>
    </MantineProvider>
  );
};
