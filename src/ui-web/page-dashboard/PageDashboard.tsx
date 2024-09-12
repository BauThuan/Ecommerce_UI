import { Box } from "@mantine/core";
import { CarouselCustom } from "../../components";
export const PageDashBoard = () => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      <Box w="95%" mt={70}>
        <CarouselCustom bdRadiusCr="10px" timeDelay={2000} />
      </Box>
    </Box>
  );
};
