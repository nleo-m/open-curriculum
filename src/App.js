import Header from "./sections/header";
import Navbar from "./components/navbar";

import { ChakraProvider, Flex } from "@chakra-ui/react";
import Stack from "./sections/stack";

function App() {
  return (
    <ChakraProvider>
      <Flex direction="column">
        <Navbar />
        <Header />
        <Stack />
      </Flex>
    </ChakraProvider>
  );
}

export default App;
