import { Flex, Text } from "@chakra-ui/react";

export default () => {
  const scrollToAnchor = (anchor) => {
    const anchorElement = document.getElementById(anchor) || "";
    anchorElement.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Flex w="100vw" bg="gray.800" minH="50px" align="center">
      <Flex w="100%" marginX="10%" color="white" justify="space-between">
        <Text>Hello world!</Text>
        <Flex gap="32px">
          <Text
            onClick={() => scrollToAnchor("header")}
            transition=".1s ease"
            cursor="pointer"
            _hover={{ color: "blue.200" }}
          >
            Sobre
          </Text>
          <Text
            onClick={() => scrollToAnchor("tech")}
            transition=".1s ease"
            cursor="pointer"
            _hover={{ color: "blue.200" }}
          >
            Tech
          </Text>
          <Text
            onClick={() => scrollToAnchor("journey")}
            transition=".1s ease"
            cursor="pointer"
            _hover={{ color: "blue.200" }}
          >
            Jornada
          </Text>
          <Text
            onClick={() => scrollToAnchor("projects")}
            transition=".1s ease"
            cursor="pointer"
            _hover={{ color: "blue.200" }}
          >
            Projetos
          </Text>
          <Text
            onClick={() => scrollToAnchor("contact")}
            transition=".1s ease"
            cursor="pointer"
            _hover={{ color: "blue.200" }}
          >
            Contato
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};
