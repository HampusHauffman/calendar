import React, {FunctionComponent, useEffect, useState} from "react";
import {weekSettingsFunction} from "./App";
import "./Style.css";



export type PermanentUsableColors = "#FFFFFF" | "#0000FF";

export type TemporaryUsableColors = "#FF0000"

export type UsableColors = PermanentUsableColors | TemporaryUsableColors;

interface CircleProps extends weekSettingsFunction {
  circleSize: number;
  weekNumber: number;
  color: UsableColors;
}

const Week: FunctionComponent<CircleProps> = ({circleSize, color, weekNumber, setWeekSettings}) => {

  const [style, setStyle] = useState({
    width: circleSize,
    height: circleSize,
    borderRadius: 50,
    border: "1px solid black",
    backgroundColor: color,
    marginRight: 5,
  });

  useEffect(() => {
    setStyle(prevState => (
        {...prevState, backgroundColor: color}
    ))
  }, [color])



  const changeColor = () => {
    setWeekSettings(weekNumber, "DOWN");
  }

  const changeColorUp = () => {
    setWeekSettings(weekNumber, "UP");
  }

  const changeColorHover = () => {
    setWeekSettings(weekNumber, "HOVER");
  }


  return (
      <button className={"week " + weekNumber} style={style} onMouseDown={changeColor} onMouseUp={changeColorUp} onMouseEnter={changeColorHover}/>
  );
}

export default Week;