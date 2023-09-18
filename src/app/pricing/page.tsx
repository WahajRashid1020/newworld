import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

const Pricing = () => {
  return (
    <>
      <body className="antialiased bg-body text-body font-body">
        <div className="">
          <Navbar />

          <section className="pt-28 pb-32 bg-gray-50 overflow-hidden">
            <div className="container mx-auto px-10">
              <div className="max-w-xl">
                <span className="inline-block mb-3 text-gray-600 text-base">
                  Pricing Plan
                </span>
                <h2 className="mb-16 font-heading font-bold text-6xl sm:text-7xl text-gray-900">
                  Everything you need for your event
                </h2>
              </div>
              <div className="flex flex-wrap">
                <div className="w-full md:w-1/3">
                  <div className="pt-8 px-11 xl:px-20 pb-10 bg-transparent border-b md:border-b-0 md:border-r border-gray-200 rounded-10">
                    <h3 className="mb-0.5 font-heading font-semibold text-lg text-gray-900">
                      General
                    </h3>
                    <p className="mb-5 text-gray-600 text-sm">
                      Best for 0-30 guests
                    </p>
                    <div className="mb-9 flex">
                      <span className="mr-1 mt-0.5 font-heading font-semibold text-lg text-gray-900">
                        $
                      </span>
                      <span className="font-heading font-semibold text-6xl sm:text-7xl text-gray-900">
                        300
                      </span>
                      {/* <!-- <span className="font-heading font-semibold self-end">/ m</span> --> */}
                    </div>
                    <div className="p-1">
                      <button className="group relative mb-9 p-px w-full font-heading font-semibold text-xs text-gray-900 bg-pink-200 uppercase tracking-px overflow-hidden rounded-md">
                        <div className="absolute top-0 left-0 transform -translate-y-full group-hover:-translate-y-0 h-full w-full bg-pink-200 transition ease-in-out duration-500"></div>
                        <div className="p-4 bg-gray-50 overflow-hidden rounded-md">
                          <p className="relative z-10">Book now</p>
                        </div>
                      </button>
                    </div>
                    <ul>
                      <li className="flex items-center font-heading mb-3 font-medium text-base text-gray-900">
                        <svg
                          className="mr-2.5"
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4.58301 11.9167L8.24967 15.5834L17.4163 6.41669"
                            stroke="#A1A1AA"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                        <p>10 Tables</p>
                      </li>
                      <li className="flex items-center font-heading mb-3 font-medium text-base text-gray-900">
                        <svg
                          className="mr-2.5"
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4.58301 11.9167L8.24967 15.5834L17.4163 6.41669"
                            stroke="#A1A1AA"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                        <p>30 Chairs</p>
                      </li>
                      <li className="flex items-center font-heading font-medium text-base text-gray-900">
                        <svg
                          className="mr-2.5"
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4.58301 11.9167L8.24967 15.5834L17.4163 6.41669"
                            stroke="#A1A1AA"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                        <p>Fully decorated</p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="w-full md:w-1/3">
                  <div className="pt-8 px-11 xl:px-20 pb-10 bg-transparent rounded-10">
                    <h3 className="mb-0.5 font-heading font-semibold text-lg text-gray-900">
                      Premium
                    </h3>
                    <p className="mb-5 text-gray-600 text-sm">
                      Best for 30-90 guests
                    </p>
                    <div className="mb-9 flex">
                      <span className="mr-1 mt-0.5 font-heading font-semibold text-lg text-gray-900">
                        $
                      </span>
                      <span className="font-heading font-semibold text-6xl sm:text-7xl text-gray-900">
                        800
                      </span>
                      {/* <!-- <span className="font-heading font-semibold self-end">/ m</span> --> */}
                    </div>
                    <div className="p-1">
                      <button className="group relative mb-9 p-px w-full font-heading font-semibold text-xs text-gray-900 bg-pink-200 uppercase tracking-px overflow-hidden rounded-md">
                        <div className="absolute top-0 left-0 transform -translate-y-full group-hover:-translate-y-0 h-full w-full bg-pink-200 transition ease-in-out duration-500"></div>
                        <div className="p-4 bg-gray-50 overflow-hidden rounded-md">
                          <p className="relative z-10">Book now</p>
                        </div>
                      </button>
                    </div>
                    <ul>
                      <li className="flex items-center font-heading mb-3 font-medium text-base text-gray-900">
                        <svg
                          className="mr-2.5"
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4.58301 11.9167L8.24967 15.5834L17.4163 6.41669"
                            stroke="#A1A1AA"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                        <p>25 Tables</p>
                      </li>
                      <li className="flex items-center font-heading mb-3 font-medium text-base text-gray-900">
                        <svg
                          className="mr-2.5"
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4.58301 11.9167L8.24967 15.5834L17.4163 6.41669"
                            stroke="#A1A1AA"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                        <p>Up to 90 chairs</p>
                      </li>
                      <li className="flex items-center font-heading mb-3 font-medium text-base text-gray-900">
                        <svg
                          className="mr-2.5"
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4.58301 11.9167L8.24967 15.5834L17.4163 6.41669"
                            stroke="#A1A1AA"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                        <p>Fully decorated + custom arrangements</p>
                      </li>
                      <li className="flex items-center font-heading font-medium text-base text-gray-900">
                        <svg
                          className="mr-2.5"
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4.58301 11.9167L8.24967 15.5834L17.4163 6.41669"
                            stroke="#A1A1AA"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                        <p>Premium Support</p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="w-full md:w-1/3">
                  <div className="relative pt-8 px-11 pb-10 bg-white rounded-10 shadow-8xl">
                    <p className="absolute right-2 top-2 font-heading px-2.5 py-1 text-xs max-w-max bg-gray-100 uppercase tracking-px rounded-full text-gray-900">
                      Popular choice
                    </p>
                    <h3 className="mb-0.5 font-heading font-semibold text-lg text-gray-900">
                      Exclusive
                    </h3>
                    <p className="mb-5 text-gray-600 text-sm">
                      Best for large events
                    </p>
                    <div className="mb-9 flex">
                      <span className="mr-1 mt-0.5 font-heading font-semibold text-lg text-gray-900">
                        $
                      </span>
                      <span className="font-heading font-semibold text-6xl sm:text-7xl text-gray-900">
                        2500
                      </span>
                      {/* <!-- <span className="font-heading font-semibold self-end">/ m</span> --> */}
                    </div>
                    <div className="group relative mb-9">
                      <div className="absolute top-0 left-0 w-full h-full bg-pink-200 opacity-0 group-hover:opacity-50 p-1 rounded-lg transition ease-out duration-300"></div>
                      <button className="p-1 w-full font-heading font-semibold text-xs text-gray-900 uppercase tracking-px overflow-hidden rounded-md">
                        <div className="relative z-10 p-4 bg-pink-200 overflow-hidden rounded-md">
                          <p>Book now</p>
                        </div>
                      </button>
                    </div>
                    <ul>
                      <li className="flex items-center font-heading mb-3 font-medium text-base text-gray-900">
                        <svg
                          className="mr-2.5"
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4.58301 11.9167L8.24967 15.5834L17.4163 6.41669"
                            stroke="#A1A1AA"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                        <p>Up to 60 tables</p>
                      </li>
                      <li className="flex items-center font-heading mb-3 font-medium text-base text-gray-900">
                        <svg
                          className="mr-2.5"
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4.58301 11.9167L8.24967 15.5834L17.4163 6.41669"
                            stroke="#A1A1AA"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                        <p>Up to 500 chairs</p>
                      </li>
                      <li className="flex items-center font-heading mb-3 font-medium text-base text-gray-900">
                        <svg
                          className="mr-2.5"
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4.58301 11.9167L8.24967 15.5834L17.4163 6.41669"
                            stroke="#A1A1AA"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                        <p>Fully custom decorated based on your theme</p>
                      </li>
                      <li className="flex items-center font-heading font-medium text-base text-gray-900">
                        <svg
                          className="mr-2.5"
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4.58301 11.9167L8.24967 15.5834L17.4163 6.41669"
                            stroke="#A1A1AA"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                        <p>Premium Support</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <Footer />
        </div>
      </body>
    </>
  );
};

export default Pricing;
