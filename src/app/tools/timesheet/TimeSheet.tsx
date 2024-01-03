"use client";
import dayReducer, { initialState } from "@/app/_lib/reducers/dayReducer";
import NameField from "@/app/_components/timesheet/NameField";
import WeekEnding from "@/app/_components/timesheet/WeekEnding";
import WorkDay from "@/app/_components/timesheet/WorkDay";
import React, { useState, useReducer, useEffect } from "react";
import TotalHours from "@/app/_components/timesheet/TotalHours";
import weekReducer, { initialWeekState } from "@/app/_lib/reducers/weekReducer";
import { findDayOfMonth } from "@/app/_lib/input-utils";

const TimeSheet = () => {
  const [employee, setEmployee] = useState("Name");
  const [week, setWeek] = useState("");
  const [totalHours, setTotalhours] = useState(0);
  const [sunday, dispatchSunday] = useReducer(dayReducer, initialState);
  const [monday, dispatchMonday] = useReducer(dayReducer, initialState);
  const [tuesday, dispatchTuesday] = useReducer(dayReducer, initialState);
  const [wednesday, dispatchWednesday] = useReducer(dayReducer, initialState);
  const [thursday, dispatchThursday] = useReducer(dayReducer, initialState);
  const [friday, dispatchFriday] = useReducer(dayReducer, initialState);
  const [saturday, dispatchSaturday] = useReducer(dayReducer, initialState);

  // const [weekState, dispatchWeek] = useReducer(weekReducer, initialWeekState);

  const onSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Stored");
    try {
      const timeSheet = {
        totalHours,
        employee,
        week,
        days: [sunday, monday, tuesday, wednesday, thursday, friday, saturday],
      };

      const serializedState = JSON.stringify(timeSheet);

      localStorage.setItem(employee + "-" + week, serializedState);
    } catch (error) {
      console.error("Error saving to local storage", error);
    }
  };

  useEffect(() => {
    setTotalhours(
      sunday.hoursWorked +
        monday.hoursWorked +
        tuesday.hoursWorked +
        wednesday.hoursWorked +
        thursday.hoursWorked +
        friday.hoursWorked +
        saturday.hoursWorked
    );
  }, [
    sunday.hoursWorked,
    monday.hoursWorked,
    tuesday.hoursWorked,
    wednesday.hoursWorked,
    thursday.hoursWorked,
    friday.hoursWorked,
    saturday.hoursWorked,
  ]);

  return (
    <div>
      <div className="flex justify-center p-5">
        <h1 className="text-5xl font-semibold">Time Sheet</h1>
      </div>
      <form
        className=" flex flex-col p-4 space-y-1 "
        onSubmit={onSubmitHandler}
      >
        <NameField setEmployee={setEmployee} employee={employee} />
        <WeekEnding week={week} setWeek={setWeek} />
        <WorkDay
          week={week}
          day={"Sunday"}
          workday={sunday}
          setWorkday={dispatchSunday}
        />
        <WorkDay
          week={week}
          day={"Monday"}
          workday={monday}
          setWorkday={dispatchMonday}
        />
        <WorkDay
          week={week}
          day={"Tuesday"}
          workday={tuesday}
          setWorkday={dispatchTuesday}
        />
        <WorkDay
          week={week}
          day={"Wednesday"}
          workday={wednesday}
          setWorkday={dispatchWednesday}
        />
        <WorkDay
          week={week}
          day={"Thursday"}
          workday={thursday}
          setWorkday={dispatchThursday}
        />
        <WorkDay
          week={week}
          day={"Friday"}
          workday={friday}
          setWorkday={dispatchFriday}
        />
        <WorkDay
          week={week}
          day={"Saturday"}
          workday={saturday}
          setWorkday={dispatchSaturday}
        />
        <TotalHours hours={totalHours} />
        <button>Save</button>
      </form>
    </div>
  );
};

export default TimeSheet;
