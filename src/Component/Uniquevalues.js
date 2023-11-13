import React from 'react'
import json from "./jsondata.json"

const col = ["shadow slight-injury","shadow seroius-injury","shadow fatal-injury"];
function Uniquevalues(prop) {
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
  
    console.log(uniqueobject);
    return (
      <div>

      {
        key.map((item,index)=>
        {
          return(
            <div className={col[index]}>
            {item} and {value[index]}
            </div>
          )
        })
      }
      </div>

      
    )
  }

export default Uniquevalues
