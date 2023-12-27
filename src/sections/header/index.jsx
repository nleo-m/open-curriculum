import { useState, useEffect } from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { LocationIcon, EmailIcon } from "../../styles/icons/GeneralIcons";

export default () => {
  const occupations = [
    "Programador Full-stack",
    "UX Designer",
    "Artista e Designer",
    "Tatuador",
    "Aspirante a escritor",
  ];
  const [currentOccupation, setCurrentOccupation] = useState(false);
  const [occupationRender, setOcuppationRender] = useState("");

  const writeWithDelay = (writable) => {
    const updateOccupation = () => {
      index++;

      if (index < writable.length) {
        setTimeout(updateOccupation, 100);

        setOcuppationRender(
          (occupationRender) =>
            occupationRender.replace(" ▮", "") + writable[index] + " ▮"
        );
      } else {
        setTimeout(nextOccupation, 1500);
      }
    };

    setOcuppationRender("");
    let index = -1;

    updateOccupation();
  };

  const nextOccupation = () => {
    const currentIndex = occupations.indexOf(currentOccupation);
    const nextIndex = (currentIndex + 1) % occupations.length;

    setCurrentOccupation(occupations[nextIndex]);
  };

  useEffect(() => {
    setTimeout(nextOccupation, 500);
  }, []);

  useEffect(() => {
    writeWithDelay(currentOccupation);
  }, [currentOccupation]);

  return (
    <Flex
      id="header"
      bg="gray.700"
      minH="300px"
      align="center"
      paddingY="2em"
      mt="50px"
    >
      <Flex
        w="100%"
        marginX="10%"
        justify="space-between"
        direction={{ base: "column", lg: "row" }}
      >
        <Flex
          w="100%"
          gap="24px"
          align="center"
          direction={{ base: "column", md: "row" }}
          mr="32px"
        >
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
          <Flex direction="column" gap="7px" w={{ base: "100%", lg: "60%" }}>
            <Text color="white" fontWeight="bold" fontSize="24px" mt="10px">
              Leonel Marcos F J
            </Text>
            <Flex align="center">
              <Text color="gray.100" fontSize="18px" mr="12px">
                Raça:
              </Text>
              <Text
                color="white"
                fontSize="20px"
                fontWeight="bolder"
                decoration="line-through"
                mr="4px"
              >
                Alien
              </Text>
              <Text color="white" fontSize="20px" fontWeight="bolder">
                Humano
              </Text>
            </Flex>
            <Flex gap="12px" align="center">
              <Text color="gray.100" fontSize="18px">
                Classe:
              </Text>
              <Text color="blue.400" fontSize="20px" fontWeight="bolder">
                {occupationRender}
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
        <Flex gap="24px" align="center" maxW={{ base: "100%", lg: "60%" }}>
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
