import React from "react";
import FormCard from "./FormCard";

const TotalHours = ({ hours }: { hours: number }) => {
  return (
    <FormCard>
      <div className="flex gap-2 justify-center w-full">
        <span>Total Hours</span>
        {hours > 0 ? <span>{hours}</span> : ""}
      </div>
    </FormCard>
  );
};

export default TotalHours;
