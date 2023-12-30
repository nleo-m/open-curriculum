import Header from "./sections/header";
import Navbar from "./components/navbar";

import { ChakraProvider, Flex } from "@chakra-ui/react";
import Stack from "./sections/stack";
import Journey from "./sections/journey";
import Projects from "./sections/projects";
import Contact from "./sections/contact";
import Footer from "./components/footer";
import { motion } from "framer-motion";
import { fadeInAnimation } from "./styles/animations";

function App() {
  return (
    <ChakraProvider>
      <Flex direction="column" as={motion.div} animation={fadeInAnimation}>
        <Navbar />
        <Header />
        <Stack />
        <Journey />
        <Projects />
        <Contact />
        <Footer />
      </Flex>
    </ChakraProvider>
  );
}

export default App;
