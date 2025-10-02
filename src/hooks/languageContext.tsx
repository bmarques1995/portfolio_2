"use client";
import { TFunction } from "i18next";
import React, { createContext, useState, useContext, useMemo, useEffect, use } from "react";
import { useTranslation } from "react-i18next";
import '@/app/lib/i18n'

type ThemeContextProviderProps = {
  children: React.ReactNode;
};

export enum SystemLanguage {
    EN_US,
    PT_BR
}

type LanguageContextType = {
  systemLanguage: SystemLanguage;
  setSystemLanguage: (language: SystemLanguage) => void;
  languageMap: Map<SystemLanguage, string>;
  translator: TFunction<"translation", undefined>
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguageContext = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useThemeContext must be used within a ThemeContextProvider");
  }
  return context;
};

export const LanguageContextProvider = ({ children }: ThemeContextProviderProps) => {
    const [systemLanguage, setSystemLanguage] = useState(SystemLanguage.EN_US);
    const languageMap = new Map<SystemLanguage, string>([
      [SystemLanguage.EN_US, "en_us"],
      [SystemLanguage.PT_BR, "pt_br"],
    ]);

    //const {t, i18n : {changeLanguage, language}} = useTranslation();
    const {t, i18n } = useTranslation();

    const languageReverseMap = new Map<string, SystemLanguage>([
      ["en_us", SystemLanguage.EN_US],
      ["pt_br", SystemLanguage.PT_BR],
    ]);

    const languageSetter = (language: SystemLanguage) => {
      localStorage.setItem("language", languageMap.get(language)!);
      setSystemLanguage(language);
      i18n.changeLanguage(languageMap.get(language)!);
    };

    const languageContextMemo: LanguageContextType = useMemo(
    () => ({
        'systemLanguage': systemLanguage,
        'setSystemLanguage': languageSetter,
        'languageMap': languageMap,
        'translator': t
    }),
    [systemLanguage, setSystemLanguage, languageMap, t]);

    useEffect(() => {
        const savedLanguage = localStorage.getItem("language");
        const treatedSavedLanguage = (savedLanguage === null || savedLanguage === "" || savedLanguage === undefined) ? "en_us" : savedLanguage;
        languageSetter(languageReverseMap.get(treatedSavedLanguage)!);
    }, []);

    return (
        <LanguageContext.Provider value={languageContextMemo}>
            {children}
        </LanguageContext.Provider>
    );
};
