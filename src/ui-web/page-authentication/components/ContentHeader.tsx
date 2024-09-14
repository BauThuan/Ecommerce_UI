import IconCart from "../assets/IconCart.svg?react";
import { Box, Text, Title, useMantineTheme } from "@mantine/core";
import { useTranslationMessage } from "../../../hooks/use-translation-message";
import { useMediaQueryScreen } from "../../../hooks";

export const ContentHeader = () => {
  const { formatMessage } = useTranslationMessage();
  const { isMobile } = useMediaQueryScreen();
  const theme = useMantineTheme();
  return (
    <Box
      w={isMobile ? "100%" : "50%"}
      display="flex"
      sx={{
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Box display="flex">
        <IconCart />
        <Text
          ml={14}
          sx={{
            fontWeight: 700,
            fontSize: 22,
            color: theme.colors.dark[0],
          }}
        >
          {formatMessage("grocerymart")}
        </Text>
      </Box>
      <Box w={isMobile ? "90%" : "auto"} pt={isMobile ? 20 : 50} pb={isMobile ? 20 : 40}>
        <Title
          size={30}
          sx={{
            textAlign: "center",
            fontWeight: 500,
            color: theme.colors.dark[0],
          }}
        >
          {formatMessage("Hello Again!")}
        </Title>
        <Text
          mt={10}
          sx={{
            textAlign: "center",
            fontSize: 15,
            fontWeight: 500,
            color: theme.colors.neutral[1],
          }}
        >
          {formatMessage(
            " Welcome back to sign in. As a returning customer, you have access to your previously saved all information.",
          )}
        </Text>
      </Box>
    </Box>
  );
};
