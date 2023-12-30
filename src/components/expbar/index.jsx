import { Box, Text } from "@chakra-ui/react";
import { ScaleToRightBox } from "../../styles/animations";

export default () => {
  const birthdate = 1999;

  return (
    <Box position="relative" minH="10px" w="100%" mt="12px">
      <Text color="white" textAlign="end">
        nv. {new Date().getFullYear() - birthdate}
      </Text>
      <ScaleToRightBox
        transitionTime="1.25s"
        widthScale="30%"
        position="absolute"
        bg="blue.400"
        minH="10px"
        w="30%"
        borderRadius="2px"
        zIndex={1}
      />
      <ScaleToRightBox
        transitionTime=".8s"
        widthScale="100%"
        position="absolute"
        bg="#13243B"
        minH="10px"
        w="100%"
        borderRadius="2px"
      />
    </Box>
  );
};
