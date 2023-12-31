import { Button, Center, Flex, Link, Text } from "@chakra-ui/react";
import ProjectCard from "../../components/projectCard";
import { projects } from "./projectsEnum";
import { useTranslation } from "react-i18next";

export default () => {
  const { t } = useTranslation();

  return (
    <Flex id="projects" minH="300px" mt="48px" paddingY="1em">
      <Flex w="100%" marginX="10%" direction="column">
        <Text fontSize="24px" fontWeight={600} mb="12px">
          {t("my_projects")}
        </Text>
        <Flex gap="32px" flexWrap="wrap" justify="center" mb="24px">
          {projects?.map((p) => (
            <ProjectCard {...p} />
          ))}
        </Flex>
        <Center>
          <Link href="https://github.com/nleo-m" isExternal>
            <Button
              fontSize="18px"
              padding="1em 2.5em"
              minW="280px"
              w={{ base: "240px", md: "480px" }}
              marginY="1em"
              colorScheme="blue"
            >
              {t("see_more")}
            </Button>
          </Link>
        </Center>
      </Flex>
    </Flex>
  );
};
