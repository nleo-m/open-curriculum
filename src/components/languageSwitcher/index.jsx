import { Image } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

export default () => {
  const {
    t,
    i18n: { language, changeLanguage },
  } = useTranslation();

  const [langIcon, setLangIcon] = useState("");

  const languages = ["en", "br", "fr"];

  const nextLang = () => {
    const currentLangIndex = languages.indexOf(language);

    changeLanguage(languages[(currentLangIndex + 1) % languages.length]);
  };

  const getLangIcon = () => {
    const base = "/assets/imgs/lang/";
    switch (language) {
      case "br":
        setLangIcon(base + "pt-br.svg");
        break;
      case "en":
        setLangIcon(base + "en-us.svg");
        break;
      case "fr":
        setLangIcon(base + "fr-fr.svg");
        break;
      default:
        return;
    }
  };

  useEffect(() => getLangIcon(), [language]);

  return (
    langIcon && (
      <Image
        boxSize="40px"
        src={langIcon}
        cursor="pointer"
        onClick={() => nextLang()}
      />
    )
  );
};
