import { MantineTheme } from "@mantine/core";
export const gridStyles = (theme: MantineTheme) => ({
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: "20px",
  [theme.breakpoints["lg"]]: {
    gridTemplateColumns: "repeat(3, 1fr)",
  },
  [theme.breakpoints["md"]]: {
    gridTemplateColumns: "repeat(2, 1fr)",
  },
  [theme.breakpoints["sm"]]: {
    gridTemplateColumns: "1fr",
  },
});
