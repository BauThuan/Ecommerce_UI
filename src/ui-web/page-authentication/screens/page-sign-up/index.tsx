import { Flex } from "@mantine/core";
import { MediaContent } from "../../components/MediaContent";
import { AuthForm } from "../../components/AuthForm";
export const PageSignUp = () => {
  return (
    <Flex
      h="100vh"
      direction={{ base: "row", sm: "row" }}
      gap={{ base: "sm", sm: "lg" }}
      justify={{ base: "center", sm: "center" }}
      align={{ base: "center" }}
    >
      <MediaContent />
      <AuthForm />
    </Flex>
  );
};
