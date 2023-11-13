import React from 'react'
import json from "./jsondata.json"
import Chart from 'react-apexcharts'

function Linechart(prop) {
  console.log(prop);
  
  // Create an object to store the counts
  const uniqueobject = {};

  // Iterate through the JSON data
  json.forEach(entry => {
    const element = entry[prop.prop];

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
  const options = {
    chart: {
      id: "basic-bar",
      background: '#1b1a1a', // Set the background color here
      foreColor: '#fff'
    },
    stroke: {
      width: 5,
      curve: "smooth",
    },
    xaxis: {
      categories: key,
    },
    dataLabels: {
      enabled: false,
      style: {
        colors: ['#FFFFFF'], // Set the label color to white
      },
    },
  };

  const series = [
    {
      name: "series-1",
      data: value,
    },
  ];



  return (
    <div className='shadow'>
      <h3>
        {prop.titletext}
      </h3>
      <Chart options={options} series={series} type={prop.type} />
    </div>
    
  )
}

export default Linechart
