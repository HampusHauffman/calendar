import React, {FunctionComponent, useEffect, useState} from "react";
import Week, {UsableColors} from "./Week";
import {weekSettingsFunction} from "./App";

export interface WeekSettings {
  weekNumber: number;
  color: UsableColors;
}

interface YearProps extends weekSettingsFunction {
  year: number;
  weekSettings: Array<WeekSettings>;
}


const Year: FunctionComponent<YearProps> = ({year, weekSettings, setWeekSettings}) => {

  let [weeks, setWeeks] = useState<JSX.Element[]>();

  useEffect(() => {
    let l: JSX.Element[] = [];
    for (let i = 0; i < 52; i++) {
      l.push(

          <Week circleSize={20} weekNumber={year * 52 + i} color={weekSettings[i].color} setWeekSettings={setWeekSettings} key={i}
          />);
    }
    setWeeks(l);
  }, [weekSettings])

  return (
      <>
        <div style={{display: "flex"}}>
          <p style={{flexGrow: 1, marginTop: 2}}>{year + 1}</p>
          <div style={{width: "95%"}}>
            {weeks}
          </div>
        </div>
      </>
  )
}

export default Year;