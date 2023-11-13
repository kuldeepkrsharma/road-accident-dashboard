import React from 'react'
import json from "./jsondata.json"
import Chart from 'react-apexcharts'

// Create an object to store the counts
const uniqueobject = {};

// Iterate through the JSON data
json.forEach(entry => {
  const element = entry.Light_conditions;

  // Check if the age band is already in the counts object
  if (uniqueobject[element]) {
    // Increment the count
    uniqueobject[element]++;
  } else {
    // Initialize the count for the new age band
    uniqueobject[element] = 1;
  }
});

// Display the counts
// console.log("uniqueobject",uniqueobject);
const key = Object.keys(uniqueobject);
const value = Object.values(uniqueobject);
const LightConditionoptions = {
    chart: {
      id: "basic-bar",
    },
    stroke: {
      width: 5,
      curve: "smooth",
    },
    xaxis: {
      categories: key,
    },
  };

  const LightConditionseries = [
    {
      name: "series-1",
      data:value,
    },
  ];

function LightCondition() {
  return (
    <div>
  <Chart options={LightConditionoptions} series={LightConditionseries} type="bar" />;
      
    </div>
  )
}

export default LightCondition
