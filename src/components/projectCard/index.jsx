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
import { EyeIcon } from "../../styles/icons/GeneralIcons";

import { useTranslation } from "react-i18next";

export default ({ img, name, description, tech, repo, preview }) => {
  const { t } = useTranslation();

  return (
    <Card maxW="md" minW={{ base: "200px", md: "480px" }}>
      <CardBody>
        <Image src={img} borderRadius="lg" />
        <VStack mt="6" spacing="3">
          <Heading size="md">{name}</Heading>
          <Flex direction="column" gap="10px">
            <Text>{t(description)}</Text>

            <Text color="gray.600" textAlign="left">
              {t("technologies")}: {tech}
            </Text>
          </Flex>
        </VStack>
      </CardBody>
      <Divider color="gray.400" />
      <CardFooter>
        <Flex gap="32px">
          <Flex align="center">
            <Link href={repo} isExternal textDecoration="underline">
              <GitIcon boxSize={8} mr="10px" fill="gray.600" />
              Repo
            </Link>
          </Flex>
          {preview && (
            <Flex align="center">
              <Link href={preview} isExternal textDecoration="underline">
                <EyeIcon boxSize={8} mr="10px" fill="gray.600" />
                Preview
              </Link>
            </Flex>
          )}
        </Flex>
      </CardFooter>
    </Card>
  );
};
