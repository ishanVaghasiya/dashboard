import React from "react";
import { Link, NavLink } from "react-router-dom";
import { SiShopware } from "react-icons/si";
import { MdOutlineCancel } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { links } from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";

const Sidebar = () => {
  const { activeMenu, setActiveMenu, screenSize, currentColor } =
    useStateContext();
  const handleCloseSidebar = () => {
    if (activeMenu && screenSize <= 900) {
      setActiveMenu(false);
    }
  };

  // Active and noraml link css for Navlink in sidebar or menu
  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 rounded-lg pb-2.5 text-white  text-md m-2";
  const normalLink =
    "flex items-center gap-5 pl-4 pt-3 rounded-lg pb-2.5  text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2";

  return (
    <>
      <div className="ml-3 h-screen md:overflow-hidden  overflow-auto md:hover:overflow-auto pb-10">
        {activeMenu && (
          <>
            {/* Brand name in sidebar and close btn*/}
            <div className="flex justify-between items-center">
              <Link
                to="/"
                onClick={() => { }}
                className="item-center gap-3 ml-3 mt-4 flex text-xl font-extrabold dark:text-white text-slate-900 text-center"
              >
                <SiShopware /> <span>Shoopy</span>
              </Link>

              {/* Close-button with tooltip */}
              <TooltipComponent content="Close" position={"BottomCenter"}>
                {/* //TODO: add className md:hidden */}
                <button
                  type="button"
                  onClick={() => {
                    setActiveMenu(!activeMenu);
                  }}
                  className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block "
                >
                  <MdOutlineCancel />
                </button>
              </TooltipComponent>
            </div>

            {/* Sidebar all Link */}
            <div className="mt-10">
              {console.log(links)}
              {links.map((item, index) => (
                <div key={index}>
                  <p className="text-gray-500 m-3 mt-4 uppercase">
                    {item.title}
                  </p>
                  {item.links.map((data) => (
                    <NavLink
                      key={data.name}
                      to={`${data.name}`}
                      style={({ isActive }) => ({ backgroundColor: isActive ? currentColor : "" })
                      }
                      className={({ isActive }) =>
                        isActive ? activeLink : normalLink
                      }
                      onClick={handleCloseSidebar}
                    >
                      <span> {data.icon}</span> <span>{data.name}</span>
                    </NavLink>
                  ))}
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Sidebar;
