import React from "react";
import Chart from "react-apexcharts";
import json from "./jsondata.json";
import Linechart from "./Linechart";

function Gender() {

  return <>
  <Linechart prop="Sex_of_driver" type="bar" titletext="Gender of driver"/>
  </>;

}

export default Gender;
