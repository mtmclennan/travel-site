import React from "react";

interface Props {
  day: string;
  date: number;
  description: string;
  startTime: string;
  endTime: string;
  hours: number;
}

const ViewDay = ({
  day,
  date,
  description,
  startTime,
  endTime,
  hours,
}: Props) => {
  return (
    <ul className="grid grid-cols-12 h-28">
      <li className="flex flex-col flex-wrap justify-center col-start-1 text-center border-r-2">
        <span>{day}</span>
        <span>{date}</span>
      </li>

      <li className="col-start-3  self-center col-end-7">{description}</li>
      <li className="col-end-10  self-center text-center">{startTime}</li>
      <li className="col-end-12 self-center text-center">{endTime}</li>
      <li className="col-end-13 self-center text-center">
        {hours > 0 ? hours : null}
      </li>
    </ul>
  );
};

export default ViewDay;
