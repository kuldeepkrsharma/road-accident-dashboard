import React from 'react'
import json from "./jsondata.json"
import Chart from 'react-apexcharts'
import Linechart from './Linechart';


function WheatherCondition() {
  return (
    <div>

      <Linechart prop="Weather_conditions" type="bar" titletext="Condition of Wheather"/>
    
    </div>
  )
}

export default WheatherCondition
