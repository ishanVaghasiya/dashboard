import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";
import { IoIosMore } from "react-icons/io";
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";
import {
  SparklineComponent,
  Inject,
  SparklineTooltip,
} from "@syncfusion/ej2-react-charts";
import { Stacked, Pie, Button, LineChart, SparkLine, ThemeSettings } from "../components";
import {
  earningData,
  medicalproBranding,
  recentTransactions,
  weeklyStats,
  dropdownData,
  SparklineAreaData,
  ecomPieChartData,
} from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";
import product9 from "../data/product9.jpg";

const Ecommerce = () => {
  const { currentColor } = useStateContext();
  return (
    // Perent div
    <div className="mt-12">
      
      <div className="flex flex-wrap lg:flex-nowrap justify-center">
        {/* Download earning card */}
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
          <div>
            <p className="font-bold text-gray-400">Earnings</p>
            <p className="text-2xl ">$63,448.78</p>
          </div>
          <div className="mt-6">
            <Button
              className=""
              text="Download"
              color="white"
              bgColor={currentColor}
              borderRadius="10px"
              size="md"
            />
          </div>
        </div>

        {/* Other customer.. to ..Refunds cards */}
        <div className="flex m-3 flex-wrap justify-center gap-1 items-center">
          {earningData.map((item) => (
            <div
              key={item.title}
              className="bg-white h-44 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56  p-4 pt-9 rounded-2xl "
            >
              <button
                type="button"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className="text-2xl opacity-0.9 rounded-full  p-4 hover:drop-shadow-xl"
              >
                {item.icon}
              </button>
              <p className="mt-3">
                <span className="text-lg font-semibold">{item.amount}</span>
                <span className={`text-sm text-${item.pcColor} ml-2`}>
                  {item.percentage}
                </span>
              </p>
              <p className="text-sm text-gray-400  mt-1">{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-10 flex-wrap justify-center">
        {/* Revenue and budget card */}
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl w-780">
          <div className="flex justify-between">
            <p>Revenue Updates</p>
            <div className="flex items-center justify-center gap-2">
              <span className="text-gray-400">
                <GoPrimitiveDot />
              </span>
              <span className="text-gray-400"> Expence</span>
              <span className="text-green-400">
                <GoPrimitiveDot />{" "}
              </span>
              <span className="text-green-400">Budget</span>
            </div>
          </div>
          <div className="flex flex-wrap justify-center mt-12 gap-x-10">
            <div className="border-r-1 border-color p-4 pr-10">
              <p className="text-3xl text-gray-700 dark:text-gray-100">
                $93,438 <span className="text-sm pl-2 text-green-600">23%</span>
              </p>
              <p className="text-xs text-gray-400 dark:text-">Budget</p>

              <p className="mt-5 text-3xl text-gray-700 dark:text-gray-100">
                $48,487
              </p>
              <p className="text-xs text-gray-400">Expense</p>
              <div className="my-5">
                <SparkLine
                  currentColor={currentColor}
                  id="line-sparkLine"
                  type="Line"
                  height="80px"
                  width="250px"
                  data={SparklineAreaData}
                  color={currentColor}
                />
              </div>

              <Button
                bgColor={currentColor}
                color="white"
                text="Download Report"
                borderRadius="10px"
              />
            </div>

            {/* Stacked for budget and expence9 */}
            <div className="">
              <Stacked width="300px" height="360px" />
            </div>
          </div>
        </div>
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-400"></div>
      </div>
    </div> // Close Perent div
  );
};

export default Ecommerce;
