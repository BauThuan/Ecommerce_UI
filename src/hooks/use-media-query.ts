import { useMediaQuery } from "@mantine/hooks";
import { useMantineTheme } from "@mantine/core";
export const useMediaQueryScreen = () => {
  const theme = useMantineTheme();
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints["md"]}px)`);
  const isDesktop = useMediaQuery(`(min-width: ${theme.breakpoints["xl"]}px)`);
  return {
    isMobile,
    isDesktop,
  };
};
