import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <section className="pt-24 overflow-hidden bg-trueGray-400">
      <div className="container mx-auto px-4">
        <img className="mx-auto mb-16 h-16 w-14" src="/logo.svg" alt="" />
        <ul className="flex flex-wrap justify-center -m-5 pb-8">
          <li className="p-5">
            <Link
              className="font-heading text-base text-gray-900 hover:text-gray-700"
              href="./services"
            >
              Services
            </Link>
          </li>
          <li className="p-5">
            <Link
              className="font-heading text-base text-gray-900 hover:text-gray-700"
              href="./pricing"
            >
              Pricing
            </Link>
          </li>
          <li className="p-5">
            <Link
              className="font-heading text-base text-gray-900 hover:text-gray-700"
              href="./contacts"
            >
              Contact
            </Link>
          </li>
        </ul>
        <div className="border-b border-gray-100"></div>
        <p className="text-center py-8 text-sm text-gray-300">
          © Copyright 2023. All Rights Reserved by New World Events.
        </p>
      </div>

      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Outfit:wght@500;600;700&display=swap"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap"
      />
      <link rel="stylesheet" href="css/tailwind/tailwind.min.css" />
      <link rel="stylesheet" href="css/main.css" />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="shuffle-for-tailwind.png"
      />
    </section>
  );
};

export default Footer;
