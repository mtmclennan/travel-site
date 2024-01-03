import React from "react";
import { DayAction, DayState } from "../_lib/reducers/dayReducer";
import { WeekAction } from "../_lib/reducers/weekReducer";
import { Html, Post, Workday } from "./interfaces";

export type SetStateBoolean = React.Dispatch<React.SetStateAction<boolean>>;

export type SetStateString = React.Dispatch<React.SetStateAction<string>>;

export type SetStatePostArr = React.Dispatch<React.SetStateAction<Post[]>>;

export type SetStateWorkday = React.Dispatch<DayAction>;

// export type SetStateWorkday = React.Dispatch<WeekAction>;

export type FormEvent = React.FormEvent<HTMLFormElement>;

export type SetStateNumber = React.Dispatch<React.SetStateAction<number>>;

export type ButtonOnClick = React.UIEvent<HTMLButtonElement>;

export type DateOptions = {
  year: "numeric" | "2-digit";
  month: "numeric" | "2-digit" | "long" | "short" | "narrow";
  day: "numeric" | "2-digit";
};
