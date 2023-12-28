import {
  Button,
  Center,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  useToast,
  Text,
  Textarea,
} from "@chakra-ui/react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import emailjs from "@emailjs/browser";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export default () => {
  const validationSchema = yup.object().shape({
    name: yup.string().max(128).required("O campo nome é obrigatório"),
    email: yup
      .string()
      .max(255)
      .email("Por favor, insira um email válido")
      .required("O campo email é obrigatório"),
    subject: yup.string().max(255).required("O campo assunto é obrigatório"),
    body: yup.string().max(512).required("O campo mensagem é obrigatório"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(validationSchema),
  });

  const toast = useToast();

  const onSubmit = async (data) => {
    await emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SID,
        process.env.REACT_APP_EMAILJS_TID,
        data,
        process.env.REACT_APP_EMAILJS_PKEY
      )
      .then(() => {
        toast({
          title: "Enviado com sucesso, te respondo já já!",
          status: "success",
          isClosable: true,
        });

        reset();
      })
      .catch(() => {
        toast({
          title: "Erro ao enviar sua mensagem!",
          status: "error",
          isClosable: true,
        });
      });
  };

  const {
    t,
    i18n: { language },
  } = useTranslation();

  return (
    <Flex id="contact" minH="300px" mt="48px" paddingY="1em">
      <Flex
        w="100%"
        marginX={{ base: "none", md: "10%" }}
        direction="column"
        justify="center"
        align="center"
      >
        <Text fontSize="24px" fontWeight={600} mb="12px">
          {t("get_in_touch")}
        </Text>

        <Flex
          w={{ base: "90%", md: "75%", lg: "40%" }}
          minW="300px"
          bg="gray.100"
          padding={{ base: "1em", md: "3em 1.5em" }}
          borderRadius="12px"
          gap="32px"
          flexWrap="wrap"
          align="center"
          justify="center"
          border="1px solid"
          borderColor="gray.200"
        >
          <form style={{ width: 80 + "%" }} onSubmit={handleSubmit(onSubmit)}>
            <FormControl mb="12px" isInvalid={errors.name}>
              <FormLabel>{t("name")}*</FormLabel>
              <Input
                borderColor="gray.300"
                maxLength={128}
                bg="#FAFAFA"
                transition=".25s ease"
                _focus={{ bg: "white" }}
                {...register("name")}
              />
              {errors.name && (
                <FormErrorMessage>{errors.name.message}</FormErrorMessage>
              )}
            </FormControl>
            <FormControl mb="12px" isInvalid={errors.email}>
              <FormLabel>{t("email")}*</FormLabel>
              <Input
                borderColor="gray.300"
                maxLength={255}
                type="email"
                bg="#FAFAFA"
                transition=".25s ease"
                _focus={{ bg: "white" }}
                {...register("email")}
              />
              {errors.email && (
                <FormErrorMessage>{errors.email.message}</FormErrorMessage>
              )}
            </FormControl>
            <FormControl mb="12px" isInvalid={errors.subject}>
              <FormLabel>{t("subject")}*</FormLabel>
              <Input
                borderColor="gray.300"
                maxLength={255}
                bg="#FAFAFA"
                transition=".25s ease"
                _focus={{ bg: "white" }}
                {...register("subject")}
              />
            </FormControl>
            <FormControl mb="12px" isInvalid={errors.body}>
              <FormLabel>{t("message")}*</FormLabel>
              <Textarea
                borderColor="gray.300"
                resize="vertical"
                maxLength={512}
                maxH="200px"
                bg="#FAFAFA"
                transition=".25s ease"
                _focus={{ bg: "white" }}
                {...register("body")}
              />
              {errors.body && (
                <FormErrorMessage>{errors.body.message}</FormErrorMessage>
              )}
            </FormControl>
            <Center>
              <Button
                fontSize="18px"
                padding="1em 2.5em"
                w="100%"
                marginY="1em"
                colorScheme="blue"
                type="submit"
              >
                {t("send")}
              </Button>
            </Center>
          </form>
        </Flex>
      </Flex>
    </Flex>
  );
};
