import React from "react";
import { useState } from "react";

interface InputProps {
  id: string;
  label: string;
  value: string;
  type: string;
  onChange: any;
}
const Input: React.FC<InputProps> = ({ id, label, value, type, onChange }) => {
  return (
    <div className="flex flex-col gap-2 m-1 w-full">
      <label htmlFor="creator" className="font-semibold text-md">
        {label}
      </label>
      <input
        type={type}
        id={id}
        onChange={onChange}
        value={value}
        className="bg-slate-200 rounded-md px-2 py-1 w-full text-sm"
      />
    </div>
  );
};

export default Input;
