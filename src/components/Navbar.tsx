"use client";
import Link from "next/link";
import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <section className="overflow-hidden">
      <div className="px-14 py-5 lg:py-8 bg-trueGray-400">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div className="w-auto">
              <div className="flex flex-wrap items-center">
                <div className="w-auto mr-14">
                  <Link href="./">
                    <img
                      src="/logo-icon-sideArtboard-1-2-at-4x.png"
                      alt="img"
                      className="h-20"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-auto">
              <div className="flex flex-wrap items-center">
                <div className="w-auto hidden lg:block">
                  <ul className="flex items-center mr-10">
                    <li className="font-heading mr-9 text-gray-900 hover:text-white-700 text-lg">
                      <Link href="./services">Services</Link>
                    </li>
                    <li className="font-heading mr-9 text-gray-900 hover:text-white-700 text-lg">
                      <Link href="./pricing">Pricing</Link>
                    </li>
                    <li className="font-heading text-gray-900 hover:text-gray-700 text-lg">
                      <Link
                        className="rounded-10 p-2 bg-pink-200"
                        href="./contacts"
                      >
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="w-auto lg:hidden">
                  <a href="#" onClick={toggleMenu}>
                    <svg
                      className="navbar-burger text-gray-800"
                      width="51"
                      height="51"
                      viewBox="0 0 56 56"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        width="56"
                        height="56"
                        rx="28"
                        fill="currentColor"
                      ></rect>
                      <path
                        d="M37 32H19M37 24H19"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`navbar-menu fixed top-0 left-0 bottom-0 w-4/6 sm:max-w-xs z-50 ${
          isMenuOpen ? "" : "hidden"
        }`}
      >
        <div
          className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-80"
          onClick={toggleMenu}
        ></div>
        <nav className="relative z-10 px-9 py-8 bg-white h-full">
          <div className="flex flex-wrap justify-between h-full">
            <div className="w-full">
              <div className="flex items-center justify-between -m-2">
                <div className="w-auto p-2">
                  <a className="inline-block" href="#">
                    <img src="/logo-icon-sideArtboard-1-2-at-4x.png" alt="" />
                  </a>
                </div>
                <div className="w-auto p-2">
                  <a className="navbar-burger" href="#" onClick={toggleMenu}>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 18L18 6M6 6L18 18"
                        stroke="#111827"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center text-center justify-center py-8 w-full">
              <ul>
                <li className="mb-12">
                  <Link
                    className="font-heading font-medium text-lg text-gray-900 hover:text-gray-700"
                    href="./services"
                  >
                    Services
                  </Link>
                </li>{" "}
                <li className="mb-12">
                  <Link
                    className="font-heading font-medium text-lg text-gray-900 hover:text-gray-700"
                    href="#"
                  >
                    Events
                  </Link>
                </li>
                <li className="mb-12">
                  <Link
                    className="font-heading font-medium text-lg text-gray-900 hover:text-gray-700"
                    href="./pricing"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    className="font-heading font-medium text-lg text-gray-900 hover:text-gray-700"
                    href="./contacts"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
