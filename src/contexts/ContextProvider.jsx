import React, { createContext, useState, useContext } from "react";

const StateContext = createContext();
const initialState = {
  chat: false,
  cart: false,
  notification: false,
  userProfile: false,
};

const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const [screenSize, setScreeSize] = useState(undefined);
  const [currentColor, setCurrentColor] = useState("#03C9D7");
  const [currentMode, setCurrentMode] = useState("light");
  const[themeSettings, setThemeSettings] = useState(false);

  const setColor = (colorMode) => {
    setCurrentColor(colorMode);
    localStorage.setItem("colorMode", colorMode);
  };

  const setMode = (e) => {
    setCurrentMode(e.target.value);
    localStorage.setItem("themeMode", e.target.value);
  };

  const handleClick = (clicked) => {
    setIsClicked({ ...initialState, [clicked]: true });
  };

  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        handleClick,
        screenSize,
        setScreeSize,
        setColor,
        setMode,
        currentColor,
        setCurrentColor,
        currentMode,
        themeSettings,
        setThemeSettings
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

const useStateContext = () => useContext(StateContext);
export { ContextProvider, StateContext, useStateContext };
