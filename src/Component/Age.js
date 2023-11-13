import React from 'react'
import json from "./jsondata.json";
import Chart from "react-apexcharts";
import Linechart from './Linechart';


function Age() {
  return (
    <div>
      <Linechart prop="Age_band_of_driver" type="bar" titletext="Abe of Driver"/>
    </div>
  )
}

export default Age
