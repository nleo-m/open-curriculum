import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { LocationIcon } from "../../styles/icons/GeneralIcons";

export default () => {
  return (
    <Flex bg="gray.700" minH="300px" align="center">
      <Flex w="100%" marginX="10%" justify="space-between">
        <Flex w="100%" gap="24px">
          <Box bg="gray.100" w="200px" h="210px" borderRadius="12px">
            <Image></Image>
          </Box>
          <Flex direction="column" gap="7px" w="60%">
            <Text color="white" fontWeight="bold" fontSize="24px" mt="10px">
              Leonel Marcos F J
            </Text>
            <Text color="white" fontSize="18px">
              Raça: Humano
            </Text>
            <Text color="white" fontSize="18px">
              Classe: Programador Full-stack
            </Text>
            <Box position="relative" minH="10px" w="100%" mt="12px">
              <Text color="white" textAlign="end">
                nv. {new Date().getFullYear() - 1999}
              </Text>
              <Box
                position="absolute"
                bg="white"
                minH="10px"
                w="30%"
                zIndex={1}
              ></Box>
              <Box position="absolute" bg="black" minH="10px" w="100%"></Box>
            </Box>
          </Flex>
        </Flex>
        <Flex gap="24px" maxW="50%">
          <Flex direction="column" gap="7px">
            <Text color="white" fontSize="18px" mt="34px">
              Criativo, dedicado e sempre disposto a aprender. Me contrata aí e
              te faço o melhor macarrão na chapa (ou seu dinheiro de volta).
            </Text>
            <Flex align="center" mt="22px">
              <LocationIcon boxSize={8} />
              <Text color="white" fontSize="18px">
                Minas Gerais, Brasil.
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
