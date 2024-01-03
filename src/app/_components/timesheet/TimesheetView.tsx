"use client";

import { convertToAMPM } from "@/app/_lib/input-utils";
import { TimeSheet, Workday } from "@/app/_types/interfaces";
import React, { useEffect, useState } from "react";
import ViewDay from "./ViewDay";
import { usePDF } from "react-to-pdf";

const TimesheetView = () => {
  const [sheet, setSheet] = useState<TimeSheet>();
  const employee = "Jake";
  const weekEnding = "2024-01-06";
  const { toPDF, targetRef } = usePDF({ filename: `${employee}${weekEnding}` });

  useEffect(() => {
    const data = localStorage.getItem(employee + "-" + weekEnding);
    if (data) {
      setSheet(JSON.parse(data));
    }
  }, []);

  const onClickHandler = (event: React.MouseEvent) => {
    event.preventDefault();
    toPDF();
  };

  console.log(sheet);
  return (
    <div ref={targetRef} className="flex flex-col justify-center items-center">
      <h1 className="flex flex-wrap h-28 content-center text-4xl">TimeSheet</h1>
      <div className="w-full max-w-screen-lg border-solid border border-gray-300 rounded ">
        <ul className="h-20 flex flex border-b-2 justify-evenly">
          <li className="self-center">
            <span>Week Ending: {weekEnding}</span>
          </li>
          <li className="self-center">
            <span>Employee: {employee}</span>
          </li>
          <li className="self-center">
            <button
              onClick={onClickHandler}
              className="px-3 py-1 border rounded-lg bg-red-800 hover:bg-red-500 text-white"
            >
              Export
            </button>
          </li>
        </ul>

        <ul className="grid grid-cols-12 bg-gray-200 h-14 content-center">
          <li className="col-start-1 text-center">Date</li>
          <li className="col-start-3 col-end-7 text-center">
            Work Description
          </li>
          <li className="col-end-10">Start Time</li>
          <li className="col-end-12">End Time</li>
          <li className="col-end-13 text-center">Hours</li>
        </ul>
        <ul>
          {sheet &&
            sheet.days &&
            sheet.days.map((day: Workday) => (
              <li className="border-t-2" key={day.day}>
                <ViewDay
                  day={day.day}
                  date={day.date}
                  startTime={day.startTime ? convertToAMPM(day.startTime) : ""}
                  endTime={day.endTime ? convertToAMPM(day.endTime) : ""}
                  description={day.description}
                  hours={day.hoursWorked}
                />
              </li>
            ))}
          <li className="flex bg-gray-200 h-14 items-center flex-wrap justify-end pr-16 gap-4">
            <span>Total Hours:</span>
            <span>{sheet?.totalHours}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TimesheetView;
