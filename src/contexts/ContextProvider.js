import { createContext, useContext, useState } from "react";

const stateContext = createContext();

const initialState = {
  chat: false,
  userProfile: false,
  notifications: false,
  cart: false,
  Language: false,
};

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);

  const [screenSize, setScreenSize] = useState(undefined);
  const [currentColor, setCurrentColor] = useState("#03C9D7");
  const [currentMode, setCurrentMode] = useState("Dark");
  const [themeSettings, setThemeSettings] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("English");

  const languageChanger = (e) => {
    setCurrentLanguage(e.target.value);
    setIsClicked({ ...initialState, ["Language"]: false });
  };

  const setMode = (e) => {
    setCurrentMode(e.target.value);

    localStorage.setItem("themeMode", e.target.value);

    setThemeSettings(false);
  };
  const setColor = (color) => {
    setCurrentColor(color);

    localStorage.setItem("colorMode", color);

    setThemeSettings(false);
  };

  const handleClick = (clicked) => {
    if (isClicked[clicked] === false) {
      return setIsClicked({ ...initialState, [clicked]: true });
    } else {
      setIsClicked({ ...initialState, [clicked]: false });
    }
  };
  return (
    <stateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        handleClick,
        screenSize,
        setScreenSize,
        currentColor,
        setColor,
        setMode,
        currentMode,
        themeSettings,
        setThemeSettings,
        setCurrentLanguage,
        currentLanguage,
        languageChanger,
      }}
    >
      {children}
    </stateContext.Provider>
  );
};

export const useStateContext = () => useContext(stateContext);
