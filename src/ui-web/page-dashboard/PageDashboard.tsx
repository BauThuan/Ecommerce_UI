import { Box, Text } from "@mantine/core";
import { CarouselCustom } from "../../components";
import { Categories } from "../../components";
export const PageDashBoard = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Box w="95%" mt={70}>
        <CarouselCustom height={300} bdRadiusCr="10px" timeDelay={2000} />
      </Box>
      <Box w="95%" mt={70}>
        <Text>Browse Categories</Text>
        <Categories listCategories={["1", "2", "3", "4", "5"]} />
      </Box>
    </Box>
  );
};
