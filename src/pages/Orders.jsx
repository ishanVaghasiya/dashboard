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
  ExcelExport,
  pdfexExort,
  Edit,
  Inject,
} from "@syncfusion/ej2-react-grids";
import { Header } from "../components";
import { ordersData, ordersGrid } from "../data/dummy";

const Orders = () => {
  return (
    <>
    <div className="m-20 md:m-10 p-5 bg-white rounded-xl" >
      <Header category="Page" title="Orders" />
      <GridComponent id="gridcomp" dataSource={ordersData} allowPaging allowSorting>
        <ColumnsDirective>
          {ordersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item}></ColumnDirective>
          ))}
        </ColumnsDirective>
        <Inject services={[Resize, Sort, ContextMenu, Filter, Page]} />
      </GridComponent>
      </div>
    </>

  );
};

export default Orders;
