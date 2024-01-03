import dayReducer, { initialState, DayAction, DayState } from "./dayReducer";
import { it, describe, expect } from "vitest";

describe("dayReducer", () => {
  it("should handle SET_DATE action", () => {
    const action: DayAction = { type: "SET_DATE", payload: 2023 - 12 - 11 };
    const newState = dayReducer(initialState, action);
    expect(newState.date).toEqual(2023 - 12 - 11);
  });

  it("should handle SET_DAY action", () => {
    const action: DayAction = { type: "SET_DAY", payload: "Monday" };
    const newState = dayReducer(initialState, action);
    expect(newState.day).toEqual("Monday");
  });

  it("should handle SET_START_TIME action", () => {
    const action: DayAction = { type: "SET_START_TIME", payload: "09:00 AM" };
    const newState = dayReducer(initialState, action);
    expect(newState.startTime).toEqual("09:00 AM");
  });

  it("should handle SET_END_TIME action", () => {
    const action: DayAction = { type: "SET_END_TIME", payload: "05:00 PM" };
    const newState = dayReducer(initialState, action);
    expect(newState.endTime).toEqual("05:00 PM");
  });

  it("should handle TOGGLE_NO_LUNCH action", () => {
    const action: DayAction = { type: "TOGGLE_NO_LUNCH" };
    const newState = dayReducer(initialState, action);
    expect(newState.noLunch).toEqual(true); // assuming initial value is false
  });

  it("should handle SET_DESCRIPTION action", () => {
    const action: DayAction = {
      type: "SET_DESCRIPTION",
      payload: "Some description",
    };
    const newState = dayReducer(initialState, action);
    expect(newState.description).toEqual("Some description");
  });

  it("should handle CALCULATE_HOURS_WORKED action", () => {
    const action: DayAction = { type: "CALCULATE_HOURS_WORKED" };

    const mockInitialState: DayState = {
      startTime: "7:00",
      endTime: "15:00",
      noLunch: false,
      description: "",
      hoursWorked: 0,
      day: "",
      date: 0,
    };

    const newState = dayReducer(mockInitialState, action);
    console.log(newState.hoursWorked);
    expect(newState.hoursWorked).toEqual(8);
  });
});
