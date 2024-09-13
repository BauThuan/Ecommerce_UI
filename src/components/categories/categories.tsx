import { Card, Image, Text, Box, useMantineTheme } from "@mantine/core";
import { CategorieProps } from "../type";
import { gridStyles } from "./style";
export const Categories = (props: CategorieProps) => {
  const {
    w = "300px",
    h = "110px",
    listCategories,
    display = "flex",
    alignItems = "center",
    justifyContent = "space-between",
  } = props;

  const theme = useMantineTheme();

  return (
    <Box sx={gridStyles(theme)}>
      {listCategories?.map((item, index) => {
        return (
          <Card
            key={index}
            sx={{
              backgroundColor: theme.colors.dark[9],
              width: w,
              height: h,
              display: display,
              alignItems: alignItems,
              flexDirection: "row",
              justifyContent: justifyContent,
            }}
            radius="md"
          >
            <Box
              sx={{
                backgroundColor: theme.colors.autumn[9],
                display: "flex",
                alignItems: "center",
                borderRadius: "10px",
              }}
            >
              <Image
                src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
                height={80}
                w={80}
                p={15}
                alt="Norway"
                radius="md"
              />
            </Box>
            <Box ml={20}>
              <Text
                sx={{
                  color: theme.colors.dark[8],
                  fontWeight: 700,
                  fontSize: "16px",
                }}
              >
                $24 - $150
              </Text>
              <Text
                sx={{
                  color: theme.colors.dark[8],
                  fontSize: "14px",
                  fontWeight: 400,
                }}
              >
                New sumatra mandeling coffe blend
              </Text>
            </Box>
          </Card>
        );
      })}
    </Box>
  );
};
