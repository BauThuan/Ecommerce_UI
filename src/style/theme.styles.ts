/* eslint-disable prettier/prettier */
import { Container, createTheme, rem } from "@mantine/core";
const CONTAINER_SIZES: Record<string, string> = {
  xxs: rem(300),
  xs: rem(400),
  sm: rem(500),
  md: rem(600),
  lg: rem(700),
  xl: rem(800),
  xxl: rem(900),
  xxxl: rem(1000),
  xxxxl: rem(1500),
};

export const theme = createTheme({
  colors: {
    neutral: [
      "#B9BABE",
      "#9E9DA8",
      "#D2D1D6",
      "#EDEDF6",
      "#F8F8FB",
      "#FAFAFD",
      "#D4D4D4",
      "#7644E1",
      "#B9BABE",
      "#9E9DA8",
    ],
    scarlet: [
      "#661B00",
      "#802200",
      "#992901",
      "#B33001",
      "#CC3601",
      "#E53D01",
      "#FF4401",
      "#FF571A",
      "#FF6934",
      "#0071DC",
      "#FF7C4D",
    ],
    primary: [
      "#0071DC",
      "#0071DC",
      "#0071DC",
      "#0071DC",
      "#0071DC",
      "#0071DC",
      "#0071DC",
      "#0071DC",
      "#0071DC",
      "#0071DC",
    ],
    sea: [
      "#77DAE6",
      "#0071DC",
      "#67B044",
      "#67B044",
      "#67B044",
      "#67B044",
      "#67B044",
      "#67B044",
      "#67B044",
      "#67B044",
    ],
    autumn: [
      "#FFB700",
      "#FFB700",
      "#FFB700",
      "#FFB700",
      "#FFB700",
      "#FFB700",
      "#FFB700",
      "#FFB700",
      "#FFB700",
      "#FFB700",
    ],
    dark: [
      "#1A162E",
      "#171C28",
      "#292E39",
      "#292E39",
      "#292E39",
      "#292E39",
      "#292E39",
      "#292E39",
      "#292E39",
      "#292E39",
    ],
  },
  headings: {
    fontFamily: "Gordita, sans-serif",
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '40px',
    xxxl: '48px',
    xxxxl: '56px',
  },
  shadows: { default: '0px 8px 32px 0px rgba(0, 0, 0, 0.16)' },
  breakpoints: {
    xs: '0',
    sm: '480',
    md: '768',
    lg: '1024',
    xl: '1280',
  },
  components: {
    Container: Container.extend({
      vars: (_, { size, fluid }) => ({
        root: {
          '--container-size': fluid
            ? '100%'
            : size !== undefined && size in CONTAINER_SIZES
            ? CONTAINER_SIZES[size]
            : rem(size),
        },
      }),
    }),
  },
});

