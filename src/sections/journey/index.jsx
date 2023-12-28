import {
  Box,
  Flex,
  Grid,
  Image,
  Text,
  Tooltip,
  VStack,
} from "@chakra-ui/react";
import { journey } from "./journeyEnum";
import { useTranslation } from "react-i18next";

export default () => {
  const {
    t,
    i18n: { language },
  } = useTranslation();

  return (
    <Flex id="journey" minH="300px" mt="48px" bg="gray.100" paddingY="2em">
      <Flex w="100%" marginX="10%" direction="column">
        <Text fontSize="24px" fontWeight={600} mb="12px">
          {t("journey")}
        </Text>
        <Grid
          justify="space-between"
          templateColumns="repeat( auto-fit, minmax(300px, 1fr) )"
        >
          {journey?.map((category) => (
            <Flex gap="24px" marginY="12px" flexWrap="wrap" direction="column">
              <Text fontSize="21px">{t(category?.title)}</Text>
              {category.items.map((i, index) => (
                <Flex
                  gap="12px"
                  align="center"
                  cursor="pointer"
                  transition="0.10s ease"
                  _hover={{ transform: "scale(1.05)" }}
                >
                  <Box
                    minW={
                      index == 0 && category?.title != "complementary"
                        ? "32px"
                        : "22px"
                    }
                    h={
                      index == 0 && category?.title != "complementary"
                        ? "32px"
                        : "22px"
                    }
                    ml={
                      index == 0 && category?.title != "complementary"
                        ? "0"
                        : "5px"
                    }
                    bg={
                      index == 0 && category?.title != "complementary"
                        ? "blue.800"
                        : "gray.600"
                    }
                    borderRadius="50%"
                  />
                  <Flex direction="column" gap="2px">
                    <Text color="gray.500" fontSize="14px">
                      {i?.date}
                    </Text>
                    <Text>{t(i?.name)}</Text>
                    <Text color="gray.700" fontSize="14px">
                      {i?.place}
                    </Text>
                  </Flex>
                </Flex>
              ))}
            </Flex>
          ))}
        </Grid>
      </Flex>
    </Flex>
  );
};
