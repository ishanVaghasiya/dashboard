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
  const [currentColor, setCurrentColor] = useState(localStorage.getItem("colorMode"));
  const [currentMode, setCurrentMode] = useState(localStorage.getItem("themeMode"));
  const[themeSettings, setThemeSettings] = useState(false);

  const setColor = (colorMode) => {
    localStorage.setItem("colorMode", colorMode);
    setCurrentColor(localStorage.getItem("colorMode"));
  };

  const setMode = (e) => {
    localStorage.setItem("themeMode", e.target.value);
    setCurrentMode(localStorage.getItem("themeMode")); 
  };

  const handleClick = (clicked) => {
    setIsClicked({ ...initialState, [clicked]: true });
  };

  return (
    <StateContext.Provider
      value={{
        initialState,
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
