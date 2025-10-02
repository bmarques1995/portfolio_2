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
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
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

    const themeContextMemo: ThemeContextType = useMemo(
    () => ({
        'theme': theme,
        'setTheme': setTheme,
        'themeMap': themeMap,
    }),
    [theme, setTheme, themeMap]);

    useEffect(() => {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.remove("dark");
      if(theme !== Theme.System)
        document.documentElement.classList.add(themeMap.get(theme)!);
    }, [theme, themeMap]);

    return (
        <ThemeContext.Provider value={themeContextMemo}>
            {children}
        </ThemeContext.Provider>
    );
};