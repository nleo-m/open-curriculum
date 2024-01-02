import { Box, Text, useStatStyles } from "@chakra-ui/react";
import { ScaleToRightBox } from "../../styles/animations";
import { useEffect, useState } from "react";

export default () => {
  const birthdate = new Date(1999, 9, 14, 12);

  const getDateDiff = (d1 = birthdate, d2 = new Date()) => {
    const diffInMilliseconds = (d2.getTime() - d1.getTime()) / 1000;
    const diffInDays = diffInMilliseconds / (3600 * 24);
    const diffInYears = diffInDays / 360;

    return Math.abs(Math.floor(diffInYears));
  };

  const [level, setLevel] = useState(getDateDiff(birthdate));

  return (
    <Box position="relative" minH="10px" w="100%" mt="12px">
      <Text color="white" textAlign="end">
        nv. {level}
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
