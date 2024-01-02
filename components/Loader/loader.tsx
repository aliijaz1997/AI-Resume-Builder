import React from "react";

const DottedLoader = ({ message }: { message: string }) => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center backdrop-blur-md z-50">
      <div className="flex flex-col items-center">
        <div className="animate-spin mb-4">
          <svg
            className="w-12 h-12 border-t-4 border-red-500 border-solid rounded-full"
            viewBox="0 0 24 24"
          >
            <path
              className="text-red-500"
              fill="none"
              stroke="#000"
              strokeWidth="2"
              d="M0 12 C7.2 12 12 6.8 12 0"
              style={{
                strokeDasharray: "0 100",
                strokeDashoffset: "25",
                animation: "spin 2s linear infinite",
              }}
            ></path>
          </svg>
        </div>
        <p className="text-center text-gray-700">{message}</p>
      </div>
    </div>
  );
};

const Loader = () => {
  return (
    <div>
      <DottedLoader message="Please Wait!" />
    </div>
  );
};

export default Loader;
