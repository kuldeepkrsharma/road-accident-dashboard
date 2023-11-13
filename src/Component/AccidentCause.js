import React from 'react'
import Linechart from './Linechart'

function AccidentCause() {
  return (
    <div>
      <Linechart prop="Cause_of_accident" type="bar" titletext="Cause of accident"/>
    </div>
  )
}

export default AccidentCause
