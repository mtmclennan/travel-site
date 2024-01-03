import { Reducer } from "react";
import dayReducer, { DayState, DayAction, initialState } from "./dayReducer"; // Import the DayState and DayAction types

// Define the state shape for the entire week
export interface WeekState {
  sunday: DayState;
  monday: DayState;
  tuesday: DayState;
  wednesday: DayState;
  thursday: DayState;
  friday: DayState;
  saturday: DayState;
}


export type WeekAction = {
  type: "SET_DAY";
  payload: { day: keyof WeekState; action: DayAction };
};

// export type WeekAction = { day: keyof WeekState; type: string; payload: any };

const weekReducer = (state: WeekState, action: WeekAction & DayAction): WeekState => {
  const { day, type, payload } = action;
  const updatedDayState = dayReducer(state[day], { type, payload });
  return { ...state, [day]: updatedDayState };
};



  export const initialWeekState: WeekState = {
    sunday: {
      startTime: "",
      endTime: "",
      noLunch: false,
      description: "",
      hoursWorked: 0,
    },
    monday: {
      startTime: "",
      endTime: "",
      noLunch: false,
      description: "",
      hoursWorked: 0,
    },
    tuesday: {
      startTime: "",
      endTime: "",
      noLunch: false,
      description: "",
      hoursWorked: 0,
    },
    wednesday: {
      startTime: "",
      endTime: "",
      noLunch: false,
      description: "",
      hoursWorked: 0,
    },
    thursday: {
      startTime: "",
      endTime: "",
      noLunch: false,
      description: "",
      hoursWorked: 0,
    },
    friday: {
      startTime: "",
      endTime: "",
      noLunch: false,
      description: "",
      hoursWorked: 0,
    },
    saturday: {
      startTime: "",
      endTime: "",
      noLunch: false,
      description: "",
      hoursWorked: 0,
    },
  };

  // export const initialStateWeek: WeekState = {
  //   sunday: { ...dayReducer(initialState, { type: "" }) },
  //   monday: { ...dayReducer(initialState, { type: "" }) },
  //   tuesday: { ...dayReducer(initialState, { type: "" }) },
  //   wednesday: { ...dayReducer(initialState, { type: "" }) },
  //   thursday: { ...dayReducer(initialState, { type: "" }) },
  //   friday: { ...dayReducer(initialState, { type: "" }) },
  //   saturday: { ...dayReducer(initialState, { type: "" }) },
  // };

  // const weekReducer: Reducer<WeekState, WeekAction> = (
  //   state: initialStateWeek,
  //   action: WeekAction
  // ) => {
  //   switch (action.type) {
  //     case "SET_DAY":
  //       return {
  //         ...state,
  //         [action.payload.day]: dayReducer(
  //           state[action.payload.day],
  //           action.payload.action
  //         ),
  //       };
  //     default:
  //       return state;
  //   }
};

export default weekReducer;
