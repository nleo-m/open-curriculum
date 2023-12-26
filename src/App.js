import Header from "./sections/header";
import Navbar from "./components/navbar";

import { ChakraProvider, Flex } from "@chakra-ui/react";
import Stack from "./sections/stack";
import Journey from "./sections/journey";
import Projects from "./sections/projects";
import Contact from "./sections/contact";
import Footer from "./components/footer";

function App() {
  return (
    <ChakraProvider>
      <Flex direction="column">
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
