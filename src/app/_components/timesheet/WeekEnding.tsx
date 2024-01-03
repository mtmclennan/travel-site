"use client";
import React, { useState } from "react";
import FormCard from "./FormCard";
import { SetStateString } from "@/app/_types/index.types";

interface Props {
  week: string;
  setWeek: SetStateString;
}

const WeekEnding = ({ week, setWeek }: Props) => {
  const [openMenu, setMenuOpen] = useState(false);

  const onClickHandler = (
    event: React.MouseEvent<HTMLButtonElement | HTMLDivElement>
  ) => {
    event.preventDefault();
    setMenuOpen((currentState) => !currentState);
  };

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWeek(event.currentTarget.value);
  };

  return (
    <>
      <FormCard onClick={onClickHandler}>
        <div className="flex relative w-full">
          <span>Week Ending</span>
          <span className="ml-auto mr-16">{week}</span>
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
        <div className="flex p-3">
          <input type="date" onChange={onChangeHandler} value={week}></input>
        </div>
      )}
    </>
  );
};

export default WeekEnding;
