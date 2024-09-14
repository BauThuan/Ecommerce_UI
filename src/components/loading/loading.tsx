import { Box, Loader } from "@mantine/core";
import { useMantineTheme } from "@mantine/core";
export const Loading = () => {
  const theme = useMantineTheme();
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
      <Loader color="blue" />
    </Box>
  );
};
