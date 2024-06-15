import { Box, Text } from "@mantine/core";
import { useTranslationMessage } from "../../../hooks/use-translation-message";
import { IconLogoAuthen } from "../assets/IconLogoAuthen";
export const MediaContent = () => {
  const { formatMessage } = useTranslationMessage();
  return (
    <Box
      h="100%"
      w="50%"
      bg="red"
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <Box w={422}>
        <IconLogoAuthen />
        <Text>
          {formatMessage(
            "The best of luxury brand values, high quality products, and innovative services",
          )}
        </Text>
      </Box>
    </Box>
  );
};
