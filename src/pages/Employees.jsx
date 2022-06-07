import React from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Resize,
  Sort,
  ContextMenu,
  Filter,
  Page,
  Toolbar,
  Inject,
} from "@syncfusion/ej2-react-grids";
import { Header } from "../components";
import { employeesData, employeesGrid } from "../data/dummy";

const Employees = () => {
  return (
    <div className="m-20 md:m-10 p-5 bg-white rounded-xl" >
      <Header category="Page" title="Employees" />
      <GridComponent id="gridcomp" dataSource={employeesData} allowPaging allowSorting toolbar={["Search"]}>
        <ColumnsDirective>
          {employeesGrid.map((item, index) => (
            <ColumnDirective key={index} {...item}></ColumnDirective>
          ))}
        </ColumnsDirective>
        <Inject services={[Resize, Sort, ContextMenu, Filter, Page, Toolbar]} />
      </GridComponent>
    </div>
  )
}

export default Employees