import { Flex, Text } from "@chakra-ui/react";

export default function Header() {
  return (
    <Flex
      bg="black"
      justifyContent="center"
      w="100vw"
      h="46px"
      alignItems="center"
    >
      <Text color="white">ugulino</Text>
    </Flex>
  );
}
