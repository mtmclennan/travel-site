"use client";

import { SetStateString } from "@/app/_types/index.types";
import React, { useState } from "react";
import FormCard from "./FormCard";

interface Props {
  employee: string;
  setEmployee: SetStateString;
}

const NameField = ({ employee = "Employee Name", setEmployee }: Props) => {
  const [openMenu, setMenuOpen] = useState(false);

  const onClickHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    setMenuOpen((currentState) => !currentState);
  };

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmployee(event.currentTarget.value);
  };

  return (
    <>
      <FormCard onClick={onClickHandler}>
        <div className="flex w-full relative">
          <span>{employee}</span>
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
        <div className="flex flex-col">
          <label htmlFor="name">Name</label>
          <input
            onChange={onChangeHandler}
            name="name"
            value={employee}
          ></input>
        </div>
      )}
    </>
  );
};

export default NameField;
