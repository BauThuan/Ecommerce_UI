import { Box, Text, useMantineTheme } from "@mantine/core";
import { useTranslationMessage } from "../../../hooks/use-translation-message";
import IconLogoAuthen from "../assets/IconLogoAuthen.svg?react";
import { useMediaQueryScreen } from "../../../hooks";
export const MediaContent = () => {
  const { formatMessage } = useTranslationMessage();
  const theme = useMantineTheme();
  const { isMobile } = useMediaQueryScreen();

  return (
    <Box
      display={isMobile ? "none" : "flex"}
      h="100%"
      w="50%"
      bg={theme.colors.neutral[4]}
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <Box w={422}>
        <IconLogoAuthen />
        <Text mt={40}>
          {formatMessage(
            "The best of luxury brand values, high quality products, and innovative services",
          )}
        </Text>
      </Box>
    </Box>
  );
};
