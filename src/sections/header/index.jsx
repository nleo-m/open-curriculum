import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { LocationIcon, EmailIcon } from "../../styles/icons/GeneralIcons";

export default () => {
  return (
    <Flex id="header" bg="gray.700" minH="300px" align="center" paddingY="1em">
      <Flex w="100%" marginX="10%" justify="space-between">
        <Flex w="100%" gap="24px">
          <Box
            border="3px solid white"
            bg="gray.100"
            w="200px"
            h="210px"
            borderRadius="12px"
          >
            <Image
              src="/assets/imgs/profile_pic.jpeg"
              boxSize="100%"
              borderRadius="12px"
              objectFit="cover"
            ></Image>
          </Box>
          <Flex direction="column" gap="7px" w="60%">
            <Text color="white" fontWeight="bold" fontSize="24px" mt="10px">
              Leonel Marcos F J
            </Text>
            <Flex gap="12px" align="center">
              <Text color="gray.100" fontSize="18px">
                Raça:
              </Text>
              <Text
                color="white"
                fontSize="20px"
                fontWeight="bolder"
                decoration="line-through"
              >
                Alien
              </Text>
            </Flex>
            <Flex gap="12px" align="center">
              <Text color="gray.100" fontSize="18px">
                Classe:
              </Text>
              <Text color="blue.400" fontSize="20px" fontWeight="bolder">
                Programador full-stack
              </Text>
            </Flex>
            <Box position="relative" minH="10px" w="100%" mt="12px">
              <Text color="white" textAlign="end">
                nv. {new Date().getFullYear() - 1999}
              </Text>
              <Box
                position="absolute"
                bg="blue.400"
                minH="10px"
                w="30%"
                borderRadius="2px"
                zIndex={1}
              ></Box>
              <Box
                position="absolute"
                bg="#13243B"
                minH="10px"
                w="100%"
                borderRadius="2px"
              ></Box>
            </Box>
          </Flex>
        </Flex>
        <Flex gap="24px" maxW="50%">
          <Flex direction="column" gap="7px">
            <Text color="white" fontSize="18px" mt="34px">
              Criativo, dedicado e sempre disposto a aprender. Me contrata aí e
              te faço o melhor macarrão na chapa (ou seu dinheiro de volta).
            </Text>
            <Flex align="center" mt="22px" gap="10px">
              <EmailIcon boxSize={7} fill="white" />
              <Text color="white" fontSize="18px">
                mfjleonel@gmail.com
              </Text>
            </Flex>
            <Flex align="center" mt="22px" gap="10px">
              <LocationIcon boxSize={8} fill="white" />
              <Text color="white" fontSize="18px">
                Juiz de fora, Minas Gerais. Brasil.
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
