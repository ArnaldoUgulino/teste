import { Flex, Text } from "@chakra-ui/react";

export default function Content() {
  return (
    <Flex
      bg="blue"
      w="100vw"
      h="50px"
      justifyContent="flex-end"
      alignItems="center"
    >
      <Text color="white">qualquer coisa</Text>
    </Flex>
  );
}
