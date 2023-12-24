import { Flex, Text } from "@chakra-ui/react";

export default () => {
  return (
    <Flex w="100vw" bg="gray.800" minH="50px" align="center">
      <Flex w="100%" marginX="10%" color="white" justify="space-between">
        <Text>Hello world!</Text>
        <Flex gap="32px">
          <a>Sobre</a>
          <a>Tech</a>
          <a>Jornada</a>
          <a>Projetos</a>
          <a>Contato</a>
        </Flex>
      </Flex>
    </Flex>
  );
};
