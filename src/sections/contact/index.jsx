import {
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Link,
  Text,
  Textarea,
} from "@chakra-ui/react";

export default () => {
  return (
    <Flex minH="300px" mt="48px">
      <Flex
        w="100%"
        marginX="10%"
        direction="column"
        justify="center"
        align="center"
      >
        <Text fontSize="24px" fontWeight={600} mb="12px">
          Entre em contato
        </Text>

        <Flex
          w="40%"
          bg="gray.100"
          padding="4em 2em"
          borderRadius="12px"
          gap="32px"
          flexWrap="wrap"
          justify="center"
          border="1px solid"
          borderColor="gray.200"
        >
          <form style={{ width: 80 + "%" }}>
            <FormControl mb="12px">
              <FormLabel>E-mail</FormLabel>
              <Input
                borderColor="gray.300"
                type="email"
                bg="#FAFAFA"
                transition=".25s ease"
                _focus={{ bg: "white" }}
              />
            </FormControl>
            <FormControl mb="12px">
              <FormLabel>Assunto</FormLabel>
              <Input
                borderColor="gray.300"
                maxLength={255}
                bg="#FAFAFA"
                transition=".25s ease"
                _focus={{ bg: "white" }}
              />
            </FormControl>
            <FormControl mb="12px">
              <FormLabel>Mensagem</FormLabel>
              <Textarea
                borderColor="gray.300"
                resize="vertical"
                maxH="200px"
                bg="#FAFAFA"
                transition=".25s ease"
                _focus={{ bg: "white" }}
              />
            </FormControl>
            <Center>
              <Button
                fontSize="18px"
                padding="1em 2.5em"
                w="75%"
                marginY="1em"
                colorScheme="blue"
                type="submit"
              >
                Enviar
              </Button>
            </Center>
          </form>
        </Flex>
      </Flex>
    </Flex>
  );
};
