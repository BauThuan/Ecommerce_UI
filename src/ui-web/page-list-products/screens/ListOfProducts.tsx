import { Box, Text } from "@mantine/core";
import { CardProduct } from "../components/CardProduct.";
import { CarouselCustom } from "../../../components";
import { Categories } from "../components/Categories";
import { Loading } from "../../../components";
import { useTranslationMessage } from "../../../hooks";
import { useGetCategoriesAndProducts } from "../hooks";

export const ListOfProducts = () => {
  const { data, isLoading } = useGetCategoriesAndProducts();
  const { formatMessage } = useTranslationMessage();

  if (isLoading) {
    return <Loading />;
  }
  console.log(data?.categories, isLoading, data?.products);
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
        <Text>{formatMessage("Browse Categories")}</Text>
        <Categories listCategories={data?.categories} />
      </Box>
      <Box w="95%" mt={70}>
        <Text>{formatMessage("Products")}</Text>
        <CardProduct />
      </Box>
    </Box>
  );
};
