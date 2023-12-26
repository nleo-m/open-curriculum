import { Button, Center, Flex, Link, Text } from "@chakra-ui/react";

export default () => {
  return (
    <Flex w="100vw" bg="gray.800" minH="50px" align="center" mt="100px">
      <Flex w="100%" marginX="10%" color="white" justify="space-between">
        <Flex direction="column" gap="10px" color="white"> 
          <Text >@ 2023 Leonel Marcos F J</Text>
        </Flex>
        <Text>&lt; / &gt;</Text>
      </Flex>
    </Flex>
  );
};
