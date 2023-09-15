import { createContext, useMemo, useState } from "react";

export const LanguageContext = createContext();

export default function LanguageProvider({ children }) {
  const [lang, setLang] = useState("tr");

  const handleLanguage = () => {
    setLang((prev) => (prev === "tr" ? "en" : "tr"));
  };

  const language = lang === "tr" ? "English" : "Türkçe";

  const value = useMemo(() => {
    return { lang, handleLanguage, language };
  }, [lang]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}
