import React from "react";

const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (
  props
) => {
  const { name } = props;
  return (
    <div className="relative w-full">
      <label className="absolute bg-white px-4 left-3 -top-3">{name}</label>
      <input
        type="text"
        {...props}
        className="px-4 py-2 border-2 outline-gray-400 rounded w-full"
      />
    </div>
  );
};

export default Input;
