import React, {FunctionComponent} from "react";
import Year, {WeekSettings} from "./Year";
import {weekSettingsFunction} from "./App";

interface PhaseProps extends weekSettingsFunction {
  phase: string;
  startYear: number;
  endYear: number;
  weekSettings: Array<WeekSettings>;
}

const Phase: FunctionComponent<PhaseProps> = ({phase, startYear, endYear, weekSettings, setWeekSettings}) => {

  const totalYears = endYear - startYear;

  return (
      <>
        <div style={{display: "flex"}}>
          <div style={{width: "10%"}}/>

          <div style={{float: "left", width: "80%"}}>

            {Array.from(
                Array(totalYears)).map((x, index) =>
                <Year year={index + startYear} weekSettings={weekSettings.slice((index) * 52, (index) * 52 + 52)}
                      setWeekSettings={setWeekSettings} key={index}/>
            )}

          </div>

          <div style={{writingMode: "vertical-lr", float: "right", width: "10%"}}>
            <svg style={{height: "100%", maxHeight: "250px"}} width="20%">
              <line x1="0" y1="0" x2="0" y2="80%" style={{stroke: "rgb(0,0,0)", strokeWidth: 3}}/>
              <line x1="0" y1="0" x2="10" y2="0" style={{stroke: "rgb(0,0,0)", strokeWidth: 3}}/>
            </svg>

            <p style={{marginTop: 5, marginLeft: 0}}>{phase}</p>
          </div>
        </div>
      </>
  )
}

export default Phase;