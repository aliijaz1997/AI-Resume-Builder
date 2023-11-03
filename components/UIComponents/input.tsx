import React, { ChangeEvent } from "react";

interface InputProps {
  id: string;
  type: string;
  value: string;
  labelText: string;
  placeHolder?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function Input({
  id,
  labelText,
  type,
  value,
  placeHolder,
  onChange,
}: InputProps) {
  return (
    <div className="mb-6">
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        {labelText}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        placeholder={placeHolder}
        onChange={onChange}
        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
        required={true}
      />
    </div>
  );
}

export default Input;
