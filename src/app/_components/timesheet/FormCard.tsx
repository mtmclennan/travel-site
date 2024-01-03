import React from "react";

const FormCard = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}) => {
  return (
    <div onClick={onClick} className="flex p-5 bg-gray-400 rounded-md relative">
      {children}
    </div>
  );
};

export default FormCard;
