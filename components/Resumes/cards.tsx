import React from "react";

const CardComponent: React.FC = () => {
  return (
    <div className="flex mb-3">
      <div className=" sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-4 ">
        <div className=" rounded-xl shadow-md shadow-gray-400 flex flex-col justify-center p-2 bg-blue-200">
          <div className="mb-2 mt-2 flex justify-around p-2 text-center">
            <svg
              className="w-9 h-9 text-blue-200 bg-blue-800 p-1 dark:text-white mt-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 15 15"
            >
              <path
                fill-rule="evenodd"
                d="M7.979 5v1.586a3.5 3.5 0 0 1 3.082-1.574C14.3 5.012 15 7.03 15 9.655V15h-3v-4.738c0-1.13-.229-2.584-1.995-2.584-1.713 0-2.005 1.23-2.005 2.5V15H5.009V5h2.97ZM3 2.487a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                clip-rule="evenodd"
              />
              <path d="M3 5.012H0V15h3V5.012Z" />
            </svg>
            <div className="">
              <svg
                className="w-5 h-5 text-blue-300 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
              <svg
                className="w-5 h-5 text-blue-300 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 5H1m0 0 4 4M1 5l4-4"
                />
              </svg>
            </div>
          </div>
          <div className="text-center text-gray-500">
            <p className="font-medium text-gray-800">LinkedIn Import.</p> Create
            a new resume quickly by importing your LinkedIn profile.
          </div>
        </div>
      </div>
      <div className=" sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-4">
        <div className=" rounded-xl shadow-md shadow-gray-400 flex flex-col justify-center p-2 bg-green-200">
          <div className="mb-2 mt-2 flex justify-around p-2 text-center">
            <svg
              className="w-9 h-9 text-green-600 bg-white p-1 dark:text-white mt-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M19 4h-1a1 1 0 1 0 0 2v11a1 1 0 0 1-2 0V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v15a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a1 1 0 0 0-1-1ZM3 4a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4Zm9 13H4a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-3H4a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-3H4a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-3h-2a1 1 0 0 1 0-2h2a1 1 0 1 1 0 2Zm0-3h-2a1 1 0 0 1 0-2h2a1 1 0 1 1 0 2Z" />
              <path d="M6 5H5v1h1V5Z" />
            </svg>
            <svg
              className="w-9 h-9 text-green-300 dark:text-white mt-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M1 5h1.424a3.228 3.228 0 0 0 6.152 0H19a1 1 0 1 0 0-2H8.576a3.228 3.228 0 0 0-6.152 0H1a1 1 0 1 0 0 2Zm18 4h-1.424a3.228 3.228 0 0 0-6.152 0H1a1 1 0 1 0 0 2h10.424a3.228 3.228 0 0 0 6.152 0H19a1 1 0 0 0 0-2Zm0 6H8.576a3.228 3.228 0 0 0-6.152 0H1a1 1 0 0 0 0 2h1.424a3.228 3.228 0 0 0 6.152 0H19a1 1 0 0 0 0-2Z" />
            </svg>
          </div>
          <div className="text-center text-gray-500">
            <p className="font-medium text-gray-800">Resume Analysis.</p>
            Check your resume for errors and get tips on how to improve it.
          </div>
        </div>
      </div>
      <div className=" sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-4">
        <div className=" rounded-xl shadow-md shadow-gray-400 flex flex-col justify-center p-2 bg-red-200">
          <div className="mb-2 mt-2 flex justify-around p-2 text-center">
            <svg
              className="w-9 h-9 text-red-600 bg-white p-1 dark:text-white mt-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 20"
            >
              <path d="M16 14V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v15a3 3 0 0 0 3 3h12a1 1 0 0 0 0-2h-1v-2a2 2 0 0 0 2-2ZM4 2h2v12H4V2Zm8 16H3a1 1 0 0 1 0-2h9v2Z" />
            </svg>
            <svg
              className="w-9 h-9 text-red-300 dark:text-white mt-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 16"
            >
              <path d="M18 0H6a2 2 0 0 0-2 2h10a4 4 0 0 1 4 4v6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Z" />
              <path d="M14 16H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2Z" />
              <path d="M8 13a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm0-4a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z" />
            </svg>
          </div>
          <div className="text-center text-gray-500">
            <p className="font-medium text-gray-800"> Mobile App.</p>
            Access your resumes and cover letters from your smartphone.
          </div>
        </div>
      </div>
      <div className=" sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-4">
        <div className=" rounded-xl shadow-md shadow-gray-400 flex flex-col justify-center p-2 bg-orange-200">
          <div className="mb-2 mt-2 flex justify-around p-2 text-center">
            <svg
              className="w-9 h-9 text-orange-600 bg-white p-1 dark:text-white mt-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 9h2m3 0h5M1 5h18M2 1h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1Z"
              />
            </svg>
            <svg
              className="w-9 h-9 text-orange-300 dark:text-white mt-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 18"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <div className="text-center text-gray-500">
            <p className="font-medium text-gray-800">Pyjama Jobs.</p>
            Get automatically matched with remote jobs that fit your skills.
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
