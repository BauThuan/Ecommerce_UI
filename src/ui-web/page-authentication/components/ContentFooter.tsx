import { Box, Text, Anchor, useMantineTheme } from "@mantine/core";
import { useTranslationMessage } from "../../../hooks/use-translation-message";
import { useQueryParams } from "../../../hooks/use-query-params";
import { useMemo } from "react";
import { SCREENS_NAME_AUTHEN } from "../constant";
export const ContentFooter = () => {
  const { formatMessage } = useTranslationMessage();
  const { getQueryParams } = useQueryParams();
  console.log(getQueryParams);
  const theme = useMantineTheme();
  const hideContentFooter = useMemo(() => {
    return getQueryParams === SCREENS_NAME_AUTHEN.SIGN_UP;
  }, [getQueryParams]);
  return (
    <Box
      display={hideContentFooter ? "none" : "flex"}
      sx={{
        alignItems: "center",
      }}
      pt={30}
    >
      <Text
        sx={{
          color: theme.colors.neutral[1],
          fontWeight: 400,
          fontSize: 14,
        }}
      >
        {formatMessage("Don’t have an account yet?")}
      </Text>
      <Anchor
        href="#"
        sx={{
          fontWeight: 500,
          fontSize: 14,
          color: theme.colors.scarlet[9],
        }}
      >
        {formatMessage("Recovery Password")}
      </Anchor>
    </Box>
  );
};
