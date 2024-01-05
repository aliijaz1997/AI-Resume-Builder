"use client";
import React, { useState } from "react";

const ResumeDropDown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        id="dropdownCheckboxButton"
        onClick={toggleDropdown}
        type="button"
        aria-haspopup="true"
        aria-expanded={isOpen ? "true" : "false"}
      >
        <p className="text-2xl font-bold text-gray-900 dark:text-white">...</p>
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div
          id="dropdownDefaultCheckbox"
          className="z-10 absolute mt-2 w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
          aria-labelledby="dropdownCheckboxButton"
        >
          <ul className="p-3 space-y-3 text-sm text-gray-700 dark:text-gray-200">
            <li>
              <div className="flex items-center">
                <input
                  id="checkbox-item-1"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                  htmlFor="checkbox-item-1"
                  className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Default checkbox
                </label>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <input
                  checked
                  id="checkbox-item-2"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                  htmlFor="checkbox-item-2"
                  className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Checked state
                </label>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <input
                  id="checkbox-item-3"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                  htmlFor="checkbox-item-3"
                  className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Default checkbox
                </label>
              </div>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ResumeDropDown;
