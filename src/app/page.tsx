import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import OurServices from "@/components/OurServices";
import React from "react";

export default function Home() {
  return (
    <>
      <body className="antialiased bg-body text-body font-body">
        <div className="">
          <Navbar />

          <section className="relative overflow-hidden">
            <div className="container mx-auto px-8">
              <div className="flex flex-wrap items-center -m-6">
                <div className="w-full lg:w-7/12 p-8 lg:p-16">
                  <div className="rounded-2xl p-3 bg-pink-200">
                    <img
                      className="relative transform hover:scale-105 transition ease-in-out duration-500 w-full rounded-10"
                      src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?crop=entropy&amp;cs=tinysrgb&amp;fm=jpg&amp;ixid=MnwzMzIzMzB8MHwxfHNlYXJjaHwxfHxldmVudHxlbnwwfHx8fDE2NjcwODEyMTQ&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1920"
                      alt=""
                    />
                  </div>
                </div>
                <div className="w-full lg:w-5/12 p-8 lg:p-16">
                  <div className="lg:max-w-md">
                    <h2 className="mb-10 font-heading font-bold text-4xl sm:text-5xl text-gray-900">
                      Event decorations customized just for you 
                    </h2>
                    <div>
                      <div className="mb-6 bg-gradient-cyan h-px"></div>
                      <div className="mb-5 flex flex-wrap items-center justify-between">
                        <h3 className="font-heading font-bold text-lg text-gray-900">
                          Weddings
                        </h3>
                        <a href="#">
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M3.75 11.25L9 6L14.25 11.25"
                              stroke="#18181B"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                        </a>
                      </div>
                      <p className="mb-5 text-base text-gray-600">
                        Amet minim mollit non deserunt ullamco est sit aliqua
                        dolor do amet sint. Velit officia consequat duis enim
                        velit mollit.
                      </p>
                    </div>
                    <div>
                      <div className="mb-6 bg-gradient-cyan h-px"></div>
                      <div className="mb-5 flex flex-wrap items-center justify-between">
                        <h3 className="font-heading font-bold text-lg text-gray-900">
                          Quinceaneras
                        </h3>
                        <a href="#">
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M3.75 11.25L9 6L14.25 11.25"
                              stroke="#18181B"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                    <div>
                      <div className="mb-6 bg-gradient-cyan h-px"></div>
                      <div className="mb-5 flex flex-wrap items-center justify-between">
                        <h3 className="font-heading font-bold text-lg text-gray-900">
                          Birthdays
                        </h3>
                        <a href="#">
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M3.75 11.25L9 6L14.25 11.25"
                              stroke="#18181B"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                        </a>
                      </div>
                      <div className="mb-6 bg-gradient-cyan h-px"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <OurServices />

          <section className="py-28 overflow-hidden">
            <div className="container mx-auto px-10">
              <div className="flex flex-wrap items-center m-6">
                <div className="w-full md:w-1/2 p-6">
                  <div className="max-w-sm">
                    <p className="mb-5 inline-block font-heading font-semibold bg-clip-text uppercase tracking-px text-gray-600">
                      990+ CUSTOMERS
                    </p>
                    <h2 className="font-heading font-semibold text-5xl sm:text-6xl text-gray-900">
                      Supporting Bay Area for 5+ years
                    </h2>
                  </div>
                </div>
                <div className="w-full md:w-1/2 p-6">
                  <div className="flex flex-wrap justify-center md:justify-start -m-5">
                    <div className="w-auto p-5">
                      <img
                        src="nwe-assets/logos/brands/brand1.png"
                        width="100"
                        alt=""
                      />
                    </div>
                    <div className="w-auto p-5">
                      <img
                        src="nwe-assets/logos/brands/brand2.png"
                        width="100"
                        alt=""
                      />
                    </div>
                    <div className="w-auto p-5">
                      <img
                        src="nwe-assets/logos/brands/brand1.png"
                        width="100"
                        alt=""
                      />
                    </div>
                    <div className="w-auto p-5">
                      <img
                        src="nwe-assets/logos/brands/brand2.png"
                        width="100"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="relative py-36 bg-gray-100 overflow-hidden">
            <img
              className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2"
              src="nwe-assets/elements/testimonials/radial2.svg"
              alt=""
            />
            <div className="relative z-10 container mx-auto px-10">
              <div className="flex flex-wrap -m-6">
                <div className="w-full md:w-1/2 p-6">
                  <h2 className="mb-16 md:max-w-md md:ml-auto font-heading font-semibold text-5xl sm:text-6xl text-gray-900">
                    {" "}
                    100+ people think New World Events is the best
                  </h2>
                  <div className="p-12 bg-white rounded-10">
                    <h3 className="mb-5 font-heading font-medium text-xl text-black">
                      “Easy to use”
                    </h3>
                    <p className="mb-7 text-lg text-black">
                      “Amet minim mollit non deserunt ullam co est sit aliqua
                      dolor do amet sint. Velit officia consequat duis enim
                      velit mollit. Exercitation veniam consequat.”
                    </p>
                    <div className="flex flex-wrap -m-1.5">
                      <div className="w-auto p-1.5">
                        <img
                          src="nwe-assets/images/testimonials/avatar7.png"
                          alt=""
                        />
                      </div>
                      <div className="w-auto p-1.5">
                        <h3 className="font-heading font-semibold text-gray-900 text-lg">
                          Marvin McKinney
                        </h3>
                        <p className="text-sm text-gray-600">
                          Co-founder at Parkon
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/2 p-6">
                  <div className="flex flex-wrap justify-center -m-6">
                    <div className="w-full lg:w-auto p-6">
                      <div className="p-12 bg-white rounded-10">
                        <h3 className="mb-5 font-heading font-medium text-xl text-black">
                          “Very professional setups”
                        </h3>
                        <p className="mb-7 text-lg text-black">
                          “Amet minim mollit non deserunt ullam co est sit
                          aliqua dolor do amet sint. Velit officia consequat
                          duis enim velit mollit. Exercitation veniam
                          consequat.”
                        </p>
                        <div className="flex flex-wrap -m-1.5">
                          <div className="w-auto p-1.5">
                            <img
                              src="nwe-assets/images/testimonials/avatar8.png"
                              alt=""
                            />
                          </div>
                          <div className="w-auto p-1.5">
                            <h3 className="font-heading font-semibold text-gray-900 text-lg">
                              Kathryn Murphy
                            </h3>
                            <p className="text-sm text-gray-600">
                              Project Manager at Marron.ai
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-full lg:w-auto p-6">
                      <div className="p-12 bg-white rounded-10">
                        <h3 className="mb-5 font-heading font-medium text-xl text-black">
                          “Beautiful custom flower arrangements”
                        </h3>
                        <p className="mb-7 text-lg text-black">
                          “Amet minim mollit non deserunt ullam co est sit
                          aliqua dolor do amet sint. Velit officia consequat
                          duis enim velit mollit. Exercitation veniam
                          consequat.”
                        </p>
                        <div className="flex flex-wrap -m-1.5">
                          <div className="w-auto p-1.5">
                            <img
                              src="nwe-assets/images/testimonials/avatar8.png"
                              alt=""
                            />
                          </div>
                          <div className="w-auto p-1.5">
                            <h3 className="font-heading font-semibold text-gray-900 text-lg">
                              Devon Lane
                            </h3>
                            <p className="text-sm text-gray-600">
                              Digital Marketer
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
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
}
