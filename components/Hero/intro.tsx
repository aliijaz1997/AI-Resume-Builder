"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Intro() {
  const { status } = useSession();
  return (
    <section
      className="relative flex min-h-screen flex-col items-center justify-center w-full h-full bg-gradient-to-b from-red-100 to-transparent mix-blend-multiply"
      style={{ borderRadius: "30% 30% 0 0 / 50% 50% 0 0" }}
    >
      <div>
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto gap-8 lg:grid-cols-12">
          {/* Left Column */}
          <div className="lg:col-span-7 place-self-center">
            <div className="animate-in slide-in-from-left-96 duration-700">
              <h1 className="text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                Best AI Resume Builder
              </h1>
              <p className="mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                Your success story begins with a resume. Create a beautiful
                resume quickly with the help of artificial intelligence and our
                customizable templates. Impress your future employer with a
                perfect resume created in minutes.
              </p>
              <div className="flex justify-start">
                {status === "authenticated" && (
                  <Link
                    href="/resume"
                    className=" cursor-pointer inline-flex items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-black hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
                  >
                    Create My Resume
                    <svg
                      className="ml-2 -mr-1 w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </Link>
                )}
                <Link
                  href="#"
                  className="cursor-pointer inline-flex items-center py-3 px-5 ml-4 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                >
                  <svg
                    className="mr-2 -ml-1 w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
                  </svg>
                  See Examples
                </Link>
              </div>
            </div>
          </div>

          <div className="hidden lg:col-span-5 lg:flex lg:mt-0">
            <Image
              src="/sampleResume.png"
              alt="mockup"
              width={400}
              height={400}
              className="rounded-xl shadow-lg animate-in slide-in-from-right-96 duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
