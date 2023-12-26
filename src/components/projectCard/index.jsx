import {
  Card,
  CardBody,
  CardFooter,
  Divider,
  Flex,
  Heading,
  Image,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";

import { GitIcon } from "../../styles/icons/StackIcons";

export default ({ img, name, description, tech, repo, preview }) => {
  return (
    <Card maxW="md" minW="md">
      <CardBody>
        <Image src={img} borderRadius="lg" />
        <VStack mt="6" spacing="3">
          <Heading size="md">{name}</Heading>
          <Flex direction="column" gap="10px">
            <Text>{description}</Text>

            <Text color="gray.600" textAlign="left">
              Tecnologias: {tech}
            </Text>
          </Flex>
        </VStack>
      </CardBody>
      <Divider color="gray.400" />
      <CardFooter>
        <Flex gap="32px">
          <Flex align="center">
            <GitIcon boxSize={8} mr="10px" fill="gray.600" />
            <Link href={repo} isExternal textDecoration="underline">
              Repo
            </Link>
          </Flex>
          {preview && (
            <Flex align="center">
              <GitIcon boxSize={8} mr="10px" fill="gray.600" />
              <Link href={preview} isExternal textDecoration="underline">
                Preview
              </Link>
            </Flex>
          )}
        </Flex>
      </CardFooter>
    </Card>
  );
};
