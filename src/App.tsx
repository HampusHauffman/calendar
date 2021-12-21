import React, {useState} from "react";
import Phase from "./Phase"
import {WeekSettings} from "./Year";
import "./Style.css";

type weekInteraction = "UP" | "DOWN" | "HOVER"

export interface weekSettingsFunction {
  setWeekSettings(weekNumber: number, interaction: weekInteraction): void;
}

function App() {


  const [weekSettings, setWeekSettings] = useState<Array<WeekSettings>>(
      () => {
        let arr: Array<WeekSettings> = []
        for (let i = 0; i < 101 * 52; i++) {
          arr[i] = {weekNumber: i, color: "#FFFFFF"}
        }
        return arr;
      }
  );

  const [lastClickedWeek, setLastClickedWeek] = useState(-1);

  const setWSettings = (weekNumber: number, interaction: weekInteraction) => {
    let newArr = [...weekSettings];

    if(interaction == "DOWN"){

      setLastClickedWeek(weekNumber);
      newArr[weekNumber].color = "#0000FF";

    }else if(interaction == "UP" && lastClickedWeek != -1){

      for(let i = lastClickedWeek; i <= weekNumber; i++){
        newArr[i].color = "#0000FF";
      }
      setLastClickedWeek(-1);

    }else if(interaction == "HOVER" && lastClickedWeek != -1){

      const min = Math.min(weekNumber,lastClickedWeek);
      const max = Math.max(weekNumber,lastClickedWeek);
      /* Add if you want to color in between
      for(let i = min+1; i < max; i++){
        newArr[i].color = "#FF0000";
      }
       */
      newArr[weekNumber].color = "#0000FF";

    }

    setWeekSettings(newArr);

  }


  return (
      <>
        <div style={{textAlign: "center", marginBottom: 50}}>
          <h1 style={{fontSize:70, marginBottom:-10}}>CALENDAR OF YOUR LIFE</h1>
          <h5>TIME IS LIMITED AND PRECIOUS. HOW DO YOU WANT TO SPEND IT?</h5>
        </div>

        <div style={{maxWidth: 880, margin: "auto"}}>
          <div style={{marginLeft: 125}}>
            <p style={{marginBottom: 5}}>WEEKS OF YOUR LIFE</p>
            <svg style={{height: 20}}>
              <line x1="0" y1="10" x2="0" y2="0" style={{stroke: "rgb(0,0,0)", strokeWidth: 3}}/>
              <line x1="0" y1="10" x2="100" y2="10" style={{stroke: "rgb(0,0,0)", strokeWidth: 2}}/>
            </svg>
          </div>

          <Phase phase={"CHILDHOOD (0-12)"} startYear={0} endYear={12} weekSettings={weekSettings.slice(0, 12 * 52)}
                 setWeekSettings={setWSettings}/>
          <br/>
          <Phase phase={"ADOLESCENCE (13-19)"} startYear={12} endYear={19} weekSettings={weekSettings.slice(12 * 52, 19 * 52)}
                 setWeekSettings={setWSettings}/>
          <br/>
          <Phase phase={"EARLY ADULTHOOD (20-34)"} startYear={19} endYear={34} weekSettings={weekSettings.slice(19 * 52, 34 * 52)}
                 setWeekSettings={setWSettings}/>
          <br/>
          <Phase phase={"MIDDLE ADULTHOOD (35-49)"} startYear={34} endYear={49} weekSettings={weekSettings.slice(34 * 52, 49 * 52)}
                 setWeekSettings={setWSettings}/>
          <br/>
          <Phase phase={"MATURE ADULTHOOD (50-79)"} startYear={49} endYear={79} weekSettings={weekSettings.slice(49 * 52, 79 * 52)}
                 setWeekSettings={setWSettings}/>
          <br/>
          <Phase phase={"LATE ADULTHOOD (80-100)"} startYear={79} endYear={100} weekSettings={weekSettings.slice(79 * 52, 100 * 52)}
                 setWeekSettings={setWSettings}/>
        </div>
      </>
  );
}

export default App;
