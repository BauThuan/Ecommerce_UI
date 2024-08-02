import { Box, Text } from "@mantine/core";
import { CardProduct } from "../components/CardProduct.";

export const ListOfProducts = () => {
  return (
    <Box w="90%" mt={80} sx={{ display: "flex", margin: "0 auto" }}>
      <Box>
        <Text fw={700} mb={15} size="xl">
          Browse Categories
        </Text>
        <CardProduct />
      </Box>
    </Box>
  );
};
