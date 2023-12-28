import { Box, Flex, Image, Text, Tooltip } from "@chakra-ui/react";
import { techStack } from "./techStackEnum";
import { useTranslation } from "react-i18next";

export default () => {
  const {
    t,
    i18n: { language },
  } = useTranslation();

  return (
    <Flex id="tech" minH="300px" mt="48px" paddingY="1.5em">
      <Flex w="100%" marginX="10%" direction="column">
        <Text fontSize="24px" fontWeight={600} mb="12px">
          Tech Stack
        </Text>
        {techStack?.map((category) => (
          <>
            <Text fontSize="21px">{t(category?.title)}</Text>
            <Flex gap="24px" marginY="12px" flexWrap="wrap">
              {category.items.map((i) => (
                <Tooltip openDelay={550} label={i?.name}>
                  <a target="blank" href={i?.url}>
                    {i?.icon}
                  </a>
                </Tooltip>
              ))}
            </Flex>
          </>
        ))}
      </Flex>
    </Flex>
  );
};
