import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const localData = localStorage.getItem("theme");
  const [isLightTheme, setIsLightTheme] = useState(
    localData
      ? JSON.parse(localData)
      : {
          isLightTheme: true,
          light: { syntax: "#555", ui: "#ddd", bg: "#eee" },
          dark: { syntax: "#ddd", ui: "#333", bg: "#555" },
        }
  );

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(isLightTheme));
  }, [isLightTheme]);

  const toggleTheme = () => {
    const dummyObj = Object.assign({}, isLightTheme);
    dummyObj.isLightTheme = !isLightTheme.isLightTheme;
    setIsLightTheme(dummyObj);
  };

  return (
    <ThemeContext.Provider
      value={{ isLightTheme, setIsLightTheme, toggleTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
