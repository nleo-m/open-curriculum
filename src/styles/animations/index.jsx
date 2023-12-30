import { Box, transition } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { keyframes } from "@emotion/react";

const fadeInFrames = keyframes`
  from {opacity: 0%}
  to {opacity: 100%}
`;

export const fadeInAnimation = `${fadeInFrames} .15s ease`;

export const ScaleToRightBox = (props) => {
  const { children, transitionTime, widthScale } = props;

  const scaleToRightFrames = keyframes`
      from {width: 0%}
      to: {width: ${widthScale}}
  `;

  const scaleToRight = `${scaleToRightFrames} ${transitionTime} ease-out`;

  return (
    <Box as={motion.div} animation={scaleToRight} {...props}>
      {children}
    </Box>
  );
};

export const ScaleUpBox = (props) => {
  const { children, transitionTime } = props;

  const scaleUp = keyframes`
  0% {transform: scale(0)}
  25% {transform: scale(0)}
  50% {transform: scale(1.25)}
  100% {transform: scale(1)}
`;

  const scaleUpAnimation = `${scaleUp} ${transitionTime} ease `;

  return (
    <Box as={motion.div} animation={scaleUpAnimation} {...props}>
      {children}
    </Box>
  );
};
