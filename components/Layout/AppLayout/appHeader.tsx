"use client";

import { signOut, useSession } from "next-auth/react";
import { useRouter, usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function AppHeader() {
  const [isDropdownOpen, setIsDropdown] = useState(false);
  const { data: session, status } = useSession();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status]);

  const isActiveRoute = (pathName: string) => {
    return pathname === pathName;
  };

  return (
    <nav className="bg-white border-gray-200 border-b dark:bg-gray-900 mb-2">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto pr-4 pl-4">
        <a
          href="https://flowbite.com/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="https://www.codester.com/static/uploads/items/000/041/41164/icon.png"
            className="h-16"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-extrabold whitespace-nowrap dark:text-white">
            Resume Builder
          </span>
        </a>
        <div className="flex items-center md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse relative">
          <button
            id="dropdownUserAvatarButton"
            data-dropdown-toggle="dropdownAvatar"
            className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
            type="button"
            onClick={() => {
              setIsDropdown(true);
            }}
            onBlur={() => {
              setTimeout(() => {
                setIsDropdown(false);
              }, 200);
            }}
          >
            <span className="sr-only">Open user menu</span>
            <img
              className="w-8 h-8 rounded-full"
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="user photo"
            />
          </button>
          {isDropdownOpen && (
            <div
              id="dropdownAvatar"
              className="z-50 bg-white divide-y divide-gray-100 rounded-lg shadow absolute top-0 right-0 mt-12 w-44 dark:bg-gray-700 dark:divide-gray-600"
            >
              <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                <div>{session?.user?.name}</div>
                <div className="font-medium truncate">
                  {session?.user?.email}
                </div>
              </div>
              <ul
                className="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownUserAvatarButton"
              >
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Dashboard
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Settings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Earnings
                  </a>
                </li>
                <li>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      signOut();
                    }}
                    className="block px-4 py-2 text-sm w-full text-start text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Sign out
                  </button>
                </li>
                <li>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      router.push("/upgrade");
                    }}
                    className="block px-4 py-2 font-semibold text-sm w-full text-start text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Free Plan (Click to upgrade)
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 ml-3"
          id="navbar-cta"
        >
          <ul className="flex flex-col  p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                href="/"
                className={`block py-2 pl-3 pr-4 ${
                  isActiveRoute("/") ? "text-red-700" : "text-gray-900"
                } rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-700 md:p-0 md:dark:hover:text-red-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/templates"
                className={`block py-2 pl-3 pr-4 ${
                  isActiveRoute("/templates") ? "text-red-700" : "text-gray-900"
                } rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-700 md:p-0 md:dark:hover:text-red-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}
              >
                Templates
              </a>
            </li>
            <li>
              <a
                href="/resumes"
                className={`block py-2 pl-3 pr-4 ${
                  isActiveRoute("/resumes") ? "text-red-700" : "text-gray-900"
                } rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-700 md:p-0 md:dark:hover:text-red-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}
              >
                Resumes
              </a>
            </li>
            <li>
              <a
                href="/upgrade"
                className={`block py-2 pl-3 pr-4 ${
                  isActiveRoute("/upgrade") ? "text-red-700" : "text-gray-900"
                } rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-700 md:p-0 md:dark:hover:text-red-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}
              >
                Upgrade
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
