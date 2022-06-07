import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { BsCheck } from "react-icons/bs";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { themeColors } from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";

const ThemeSettings = () => {
  const {setColor, setMode, currentMode, currentColor, setThemeSettings } = useStateContext()
  return (
    <>
      <div className="bg-half-transparent w-screen nav-item top-0 right-0 fixed">
        <div className="p-4 float-right h-screen w-350 bg-white dark:[#484B52] dark:text-gray-200">
          <div className="pb-4 flex justify-between ">
            <p className="text-2xl font-extrabold ">Settings</p>
            <button onClick={() => {setThemeSettings(false)}}>
              <MdOutlineCancel />
            </button>
          </div>

          <div className="pt-3 border-t-1 border-color">
            <p className="font-semibold ">Theme Options</p>
            <div className="mt-2">
              <input
                type="radio"
                name="theme"
                id="light"
                value="light"
                className=" cursor-pointer"
                onChange={setMode}
                checked={currentMode === "light"}
              />
              <label className="ml-2 text-sm cursor-pointer" htmlFor="light">Light</label>
            </div>

            <div className="mt-1">
              <input
                className="cursor-pointer"
                type="radio"
                name="theme"
                id="dark"
                value="dark"
                onChange={setMode}
                checked={currentMode === "dark"}
              />
              <label className="ml-2 text-sm cursor-pointer" htmlFor="dark">Dark</label>
            </div>
          </div> 

          <div className="mt-3 pt-4 border-t-1 border-color">
            <p className="font-semibold pb-2">Theme Colors</p>
            <div className="gap-5">
              {themeColors.map((item, index) => (
                <button onClick={() => {setColor(item.color)}} type="button" key={index} style={{backgroundColor: item.color}} className=" mx-1 rounded-full cursor-pointer h-8 w-8 ">
                  <BsCheck  className={`m-auto text-2xl text-white ${currentColor === item.color ? "block" : "hidden"}`}/>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThemeSettings;
