"use client";
import React, { createContext, useState, useContext, useMemo, useEffect, use } from "react";

type ThemeContextProviderProps = {
  children: React.ReactNode;
};

export enum Theme {
  Light,
  Dark,
  System
}

type ThemeContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  themeMap: Map<Theme, string>;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useThemeContext must be used within a ThemeContextProvider");
  }
  return context;
};

export const ThemeContextProvider = ({ children }: ThemeContextProviderProps) => {
    const [theme, setTheme] = useState(Theme.System);
    const themeMap = new Map<Theme, string>([
      [Theme.System, ""],
      [Theme.Light, "light"],
      [Theme.Dark, "dark"],
    ]);

    const themeReverseMap = new Map<string, Theme>([
      ["system", Theme.System],
      ["light",Theme.Light],
      ["dark", Theme.Dark],
    ]);

    const themeSetter = (theme: Theme) => {
      localStorage.setItem("theme", themeMap.get(theme)!);
      console.log(theme);
      setTheme(theme);
    };

    const themeContextMemo: ThemeContextType = useMemo(
    () => ({
        'theme': theme,
        'setTheme': themeSetter,
        'themeMap': themeMap,
    }),
    [theme, setTheme, themeMap]);


    useEffect(() => {
      const savedTheme = localStorage.getItem("theme");
      const treatedSavedTheme = (savedTheme === null || savedTheme === "") ? "system" : savedTheme;
      if(savedTheme === null)
        localStorage.setItem("theme", "system");
      console.log(treatedSavedTheme);
      const currentTheme = themeReverseMap.get(treatedSavedTheme)!;
      setTheme(themeReverseMap.get(treatedSavedTheme)!);
      document.documentElement.classList.remove("light");
      document.documentElement.classList.remove("dark");
      if(currentTheme !== Theme.System)
        document.documentElement.classList.add(themeMap.get(currentTheme)!);
    }, [setTheme, themeMap]);

    return (
        <ThemeContext.Provider value={themeContextMemo}>
            {children}
        </ThemeContext.Provider>
    );
};