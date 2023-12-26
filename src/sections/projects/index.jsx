import { Button, Center, Flex, Link, Text } from "@chakra-ui/react";
import ProjectCard from "../../components/projectCard";
import { projects } from "./projectsEnum";

export default () => {
  return (
    <Flex minH="300px" mt="48px">
      <Flex w="100%" marginX="10%" direction="column">
        <Text fontSize="24px" fontWeight={600} mb="12px">
          Alguns dos meus projetos
        </Text>
        <Flex gap="32px" flexWrap="wrap" justify="center">
          {projects?.map((p) => (
            <ProjectCard {...p} />
          ))}
        </Flex>
        <Center>
          <Link href="https://github.com/nleo-m" isExternal>
            <Button fontSize="18px" padding="1em 2.5em" minW="280px" marginY="1em" colorScheme="blue">
              Ver mais
            </Button>
          </Link>
        </Center>
      </Flex>
    </Flex>
  );
};
