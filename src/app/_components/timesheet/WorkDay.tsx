import { findDayOfMonth } from "@/app/_lib/input-utils";
import { SetStateWorkday } from "@/app/_types/index.types";
import { Workday } from "@/app/_types/interfaces";
import React, { useEffect, useState } from "react";
import FormCard from "./FormCard";

interface Props {
  day: string;
  setWorkday: SetStateWorkday;
  workday: Workday;
  week: string;
}

const WorkDay = ({ day, week, setWorkday, workday }: Props) => {
  const [openMenu, setMenuOpen] = useState(false);
  const [date, setDate] = useState(0);

  useEffect(() => {
    if (week) {
      const dateOfMonth = findDayOfMonth(day, week);
      if (dateOfMonth) setDate(dateOfMonth);
    }
  }, [week]);

  const onClickHandler = (
    event: React.MouseEvent<HTMLButtonElement | HTMLDivElement>
  ) => {
    event.preventDefault();
    setMenuOpen((currentState) => !currentState);
  };

  const startTimeChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    console.log(event.currentTarget.value);
    setWorkday({
      type: "SET_START_TIME",
      payload: event.currentTarget.value,
    });
  };
  const endTimeChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWorkday({ type: "SET_END_TIME", payload: event.currentTarget.value });
  };
  const noLunchChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWorkday({ type: "TOGGLE_NO_LUNCH" });
  };
  const descriptionChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setWorkday({ type: "SET_DESCRIPTION", payload: event.currentTarget.value });
  };

  useEffect(() => {
    if (workday.startTime && workday.endTime) {
      setWorkday({ type: "CALCULATE_HOURS_WORKED" });
    }

    if (!workday.day) {
      setWorkday({
        type: "SET_DAY",
        payload: day,
      });
    }
  }, [workday.startTime, workday.endTime, setWorkday, day]);

  useEffect(() => {
    setWorkday({ type: "SET_DATE", payload: date });
  }, [date]);

  return (
    <>
      <FormCard onClick={onClickHandler}>
        <div className="flex relative w-full">
          <span>{day}</span>
          {workday.hoursWorked > 0 ? (
            <div className="flex w-full gap-2 justify-end mr-16">
              <span>Hours:</span>
              <span>{workday.hoursWorked}</span>
            </div>
          ) : (
            ""
          )}

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            className="w-6 h-6 absolute right-2 self-center "
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
      </FormCard>
      {openMenu && (
        <div className="flex flex-col  p-3">
          <div className="flex gap-6">
            <label htmlFor="start">Start Time</label>
            {/* <select value={workday.startTime} id="start">
              <option value="00:00">12:00 AM</option>
            </select> */}

            <input
              name="start"
              type={"time"}
              value={workday.startTime}
              step={900}
              onChange={startTimeChangeHandler}
            ></input>
          </div>
          <div className="flex gap-6">
            <label htmlFor="end">End Time</label>
            <input
              name="end"
              type={"time"}
              value={workday.endTime}
              onChange={endTimeChangeHandler}
            ></input>
          </div>
          <label htmlFor="noLunch">No Lunch</label>
          <input
            name="noLunch"
            type={"checkbox"}
            checked={workday.noLunch}
            onChange={noLunchChangeHandler}
          ></input>
          <div className="flex flex-col  p-3">
            <label htmlFor="description">Work Description</label>
            <input
              type={"text"}
              value={workday.description}
              onChange={descriptionChangeHandler}
            ></input>
          </div>
        </div>
      )}
    </>
  );
};

export default WorkDay;
