import { Reducer } from "react";
import { convert24HourTimeToNumber } from "../convertTime";

// Define the state shape for a single day
export interface DayState {
  startTime: string;
  endTime: string;
  noLunch: boolean;
  description: string;
  hoursWorked: number;
  day: string;
  date: number;
}

// Define the action types
export type DayAction =
  | { type: "SET_DAY"; payload: string }
  | { type: "SET_DATE"; payload: number }
  | { type: "SET_START_TIME"; payload: string }
  | { type: "SET_END_TIME"; payload: string }
  | { type: "TOGGLE_NO_LUNCH" }
  | { type: "SET_DESCRIPTION"; payload: string }
  | { type: "CALCULATE_HOURS_WORKED" };

export const initialState: DayState = {
  startTime: "",
  endTime: "",
  noLunch: false,
  description: "",
  hoursWorked: 0,
  day: "",
  date: 0,
};

const dayReducer: Reducer<DayState, DayAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case "SET_DATE":
      return { ...state, date: action.payload };
    case "SET_DAY":
      return { ...state, day: action.payload };
    case "SET_START_TIME":
      return { ...state, startTime: action.payload };
    case "SET_END_TIME":
      return { ...state, endTime: action.payload };
    case "TOGGLE_NO_LUNCH":
      return { ...state, noLunch: !state.noLunch };
    case "SET_DESCRIPTION":
      return { ...state, description: action.payload };
    case "CALCULATE_HOURS_WORKED":
      const minutes =
        convert24HourTimeToNumber(state.endTime) -
        convert24HourTimeToNumber(state.startTime);

      const hours = +Number(minutes / 60).toFixed(1);
      const hoursWorked = Math.round(hours * 2) / 2;
      return { ...state, hoursWorked };
    default:
      return state;
  }
};

export default dayReducer;
