import { useState, useEffect } from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { LocationIcon, EmailIcon } from "../../styles/icons/GeneralIcons";
import { useTranslation } from "react-i18next";
import Expbar from "../../components/expbar";

export default () => {
  const { t } = useTranslation();

  const occupations = [
    t("full_dev"),
    t("ux_designer"),
    t("cybersec_enthusiast"),
    t("artist_designer"),
    t("tattooer"),
    t("writer_wannabe"),
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
                {t("race")}:
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
                {t("human")}
              </Text>
            </Flex>
            <Flex gap="12px" align="center">
              <Text color="gray.100" fontSize="18px">
                {t("class")}:
              </Text>
              <Text
                color="blue.400"
                fontSize="20px"
                fontWeight="bolder"
                alignSelf="flex-start"
                h="24px"
              >
                {t(occupationRender)}
              </Text>
            </Flex>
            <Expbar />
          </Flex>
        </Flex>
        <Flex gap="24px" align="center" maxW={{ base: "100%", lg: "60%" }}>
          <Flex direction="column" gap="7px">
            <Text color="white" fontSize="18px" mt="34px">
              {t("about_desc")}
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
                Juiz de fora, Minas Gerais. {t("br")}.
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
