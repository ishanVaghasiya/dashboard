import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import {
  Button,
  Cart,
  ChartsHeader,
  Chat,
  Footer,
  Header,
  Navbar,
  Notification,
  Sidebar,
  ThemeSettings,
  UserProfile,
} from "./components";
import {
  Calendar,
  ColorPicker,
  Customers,
  Ecommerce,
  Editor,
  Employees,
  Kanban,
  Orders,
  Area,
  Bar,
  ColorMapping,
  Financial,
  Line,
  Pie,
  Pyramid,
  Stacked,
} from "./pages";
import { useStateContext } from "./contexts/ContextProvider";
// import { StateContext } from "./contexts/ContextProvider";

const App = () => {
  const { activeMenu, themeSettings,setThemeSettings, currentColor, currentMode } = useStateContext();

  return (
    <>
    <div className={`${currentMode === "dark" ? "dark" : ""}`}>
    {themeSettings && <ThemeSettings />}
      <BrowserRouter>
        {/*-- Main Parent div --*/}
        <div className="flex relative dark:bg-main-dark-bg ">
          {/* -- Setting button with tooltips --*/}
          <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
            <TooltipComponent content="Settings" position="Top">
              <button
              onClick={() => {setThemeSettings(true)}}
                className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
                style={{ backgroundColor: currentColor, borderRadius: "50%" }}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {/* -- END : Setting button with tooltips --*/}

          {/* -- siderbar -- */}
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}
          <div
            className={
              activeMenu
                ? "dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  "
                : "bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2  "
            }
          >
            {/* -- END: siderbar -- */}

            {/* -- NavBar -- */}
            <div className="static bg-white dark:bg-black navbar w-full  ">
              <Navbar />
            </div>
            {/* -- END: NavBar -- */}

            <Routes>
              {/* dashboard  */}
              <Route path="/" element={<Ecommerce />} />
              <Route path="/ecommerce" element={<Ecommerce />} />

              {/* pages  */}
              <Route path="/orders" element={<Orders />} />
              <Route path="/employees" element={<Employees />} />
              <Route path="/customers" element={<Customers />} />

              {/* apps  */}
              <Route path="/kanban" element={<Kanban />} />
              <Route path="/editor" element={<Editor />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/color-picker" element={<ColorPicker />} />

              {/* charts  */}
              <Route path="/line" element={<Line />} />
              <Route path="/area" element={<Area />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/financial" element={<Financial />} />
              <Route path="/color-mapping" element={<ColorMapping />} />
              <Route path="/pyramid" element={<Pyramid />} />
              <Route path="/stacked" element={<Stacked />} />
            </Routes>
          </div>
        </div>
        {/*-- END : Main Parent div --*/}
      </BrowserRouter>
      </div>
    </>
  );
};

export default App;
