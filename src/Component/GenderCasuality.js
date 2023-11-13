import React from 'react'
import json from "./jsondata.json"
import Chart from 'react-apexcharts'
import Linechart from './Linechart';



function GenderCasuality() {
  return (
    <div>
      
      <Linechart prop="Sex_of_casualty" titletext="Gender of Casuality"/>
    </div>
  )
}

export default GenderCasuality
