import { Flex, Text, useMediaQuery } from "@chakra-ui/react";
import { useState } from "react";
import {
  CloseIcon,
  EmailIcon,
  HamburguerIcon,
  PinPointIcon,
  ProfileIcon,
  ProjectsIcon,
  TechIcon,
} from "../../styles/icons/GeneralIcons";

export default () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)", { ssr: false });
  const [isMenuCollapsed, setMenuCollapsed] = useState(false);

  const navItems = [
    {
      name: "Sobre",
      anchor: "header",
      icon: <ProfileIcon fill="gray.100" mr="6px" boxSize={6} />,
    },
    {
      name: "Tech",
      anchor: "tech",
      icon: <TechIcon fill="gray.100" mr="6px" boxSize={6} />,
    },
    {
      name: "Jornada",
      anchor: "journey",
      icon: <PinPointIcon fill="gray.100" mr="6px" boxSize={6} />,
    },
    {
      name: "Projetos",
      anchor: "projects",
      icon: <ProjectsIcon fill="gray.100" mr="6px" boxSize={6} />,
    },
    {
      name: "Contato",
      anchor: "contact",
      icon: <EmailIcon fill="gray.100" mr="6px" boxSize={6} />,
    },
  ];

  const scrollToAnchor = (anchor) => {
    const anchorElement = document.getElementById(anchor) || "";
    anchorElement.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Flex
      w="100vw"
      bg="gray.800"
      minH="50px"
      align="center"
      position="fixed"
      zIndex={2}
    >
      <Flex w="100%" marginX="10%" color="white" justify="space-between">
        <Text>Hello world!</Text>
        {!isMobile && (
          <Flex gap="32px" direction={{ base: "column", md: "row" }}>
            {navItems?.map((i) => (
              <Flex align="center">
                {i?.icon}
                <Text
                  onClick={() => scrollToAnchor(i?.anchor)}
                  transition=".1s ease"
                  cursor="pointer"
                  _hover={{ color: "blue.200" }}
                >
                  {i?.name}
                </Text>
              </Flex>
            ))}
          </Flex>
        )}
      </Flex>

      {isMobile && !isMenuCollapsed && (
        <>
          <Flex
            bg="blue.500"
            position="fixed"
            right={0}
            top="50px"
            w="260px"
            h="100vh"
            align="end"
            padding="1em 2em"
            fontSize="20px"
            color="white"
            direction="column"
            gap="18px"
          >
            {navItems?.map((i) => (
              <Flex align="center">
                {i?.icon}
                <Text
                  onClick={() => scrollToAnchor(i?.anchor)}
                  cursor="pointer"
                  transition=".25s ease"
                  _hover={{ color: "blue.200" }}
                >
                  {i?.name}
                </Text>
              </Flex>
            ))}
          </Flex>
          <CloseIcon
            onClick={() => setMenuCollapsed(true)}
            boxSize={12}
            fill="white"
            mr="24px"
          />
        </>
      )}

      {isMobile && isMenuCollapsed && (
        <HamburguerIcon
          onClick={() => setMenuCollapsed(false)}
          boxSize={12}
          fill="white"
          mr="24px"
        />
      )}
    </Flex>
  );
};
