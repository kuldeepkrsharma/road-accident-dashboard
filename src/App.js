import "./App.css";
import Chart from "react-apexcharts";
import json from "./Component/jsondata.json";
import Gender from "./Component/Gender";
import Age from "./Component/Age";
import LightCondition from "./Component/LightCondition";
import WheatherCondition from "./Component/WheatherCondition";
import GenderCasuality from "./Component/GenderCasuality";
import Weekdays from "./Component/Weekdays";
import Casualityclass from "./Component/Casualityclass";
import Collisiontype from "./Component/Collisiontype";
import Vechiletype from "./Component/Vechiletype";
import AccidentCause from "./Component/AccidentCause";
import Linechart from "./Component/Linechart";
import Uniquevalues from "./Component/Uniquevalues";

function App() {

  return (
    <div className="container-fluid">

            <div className="text-white">
      <div className="shadow total-fatality">
      Total accident: {json.length}
      </div>
      
      <Uniquevalues prop="Accident_severity"></Uniquevalues>
      
      </div>
      <div className="row">
        <div className="col-lg-6">
          <AccidentCause/>
        </div>
        <div className="col-lg-6">
          <Vechiletype/>
        </div>
        <div className="col-lg-6">
          <Collisiontype/>
        </div>
        <div className="col-lg-6">
          <Casualityclass/>
        </div>
        <div className="col-lg-6">
          <GenderCasuality/>
        </div>
        <div className="col-lg-6">
          <WheatherCondition/>
        </div>
        <div className="col-lg-6">
          <LightCondition/>
        </div>
        <div className="col-lg-6">
          <Age />
        </div>
        <div className="col-lg-6">
          <Gender />
        </div>
        <div className="col-lg-6">         
          <Weekdays />
        </div>
      </div>
    </div>
  )
}

export default App;
