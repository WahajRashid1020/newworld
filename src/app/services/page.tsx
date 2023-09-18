import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import OurServices from "@/components/OurServices";
import React from "react";

const Services = () => {
  return (
    <>
      <body className="antialiased bg-body text-body font-body">
        <div className="">
          <Navbar />

          <section className="relative pt-24 pb-32 overflow-hidden">
            <div className="container mx-auto px-10 mb-12">
              <h2 className="mb-6 max-w-xl mx-auto font-heading font-bold text-center text-6xl sm:text-7xl text-gray-900">
                A simple &amp; efficientway to get your event needs
              </h2>
              <p className="mb-16 max-w-lg mx-auto text-center text-gray-600 text-lg">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat.
              </p>
              <div className="flex flex-wrap -m-8">
                <div className="w-full md:w-1/3 p-8">
                  <a className="group" href="#">
                    <div className="mb-9 overflow-hidden rounded-2xl">
                      <img
                        className="transform hover:scale-110 w-full transition ease-out duration-500"
                        src="https://images.unsplash.com/photo-1484156818044-c040038b0719?crop=entropy&amp;cs=tinysrgb&amp;fm=jpg&amp;ixid=MnwzMzIzMzB8MHwxfHNlYXJjaHwyNHx8ZXZlbnR8ZW58MHx8fHwxNjY3NDQ3NzQ3&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1920"
                        alt=""
                      />
                    </div>
                    <h3 className="mb-4 font-heading font-bold text-gray-900 text-xl group-hover:underline">
                      2100+ events completed
                    </h3>
                    <p className="mb-5 text-gray-600 text-base">
                      Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor do amet sint. Velit officia consequat duis enim.
                    </p>
                  </a>
                  <a
                    className="group inline-block font-heading font-medium text-gray-900 hover:text-gray-800 text-base overflow-hidden"
                    href="#"
                  >
                    <p className="mb-1">Learn more</p>
                    <div className="w-full transform -translate-x-0 group-hover:translate-x-full h-1 bg-gradient-pink transition ease-in-out duration-500"></div>
                  </a>
                </div>
                <div className="w-full md:w-1/3 p-8">
                  <a className="group" href="#">
                    <div className="mb-9 overflow-hidden rounded-2xl">
                      <img
                        className="transform hover:scale-110 w-full transition ease-out duration-500"
                        src="https://images.unsplash.com/photo-1522413452208-996ff3f3e740?crop=entropy&amp;cs=tinysrgb&amp;fm=jpg&amp;ixid=MnwzMzIzMzB8MHwxfHNlYXJjaHw1OHx8ZXZlbnR8ZW58MHx8fHwxNjY3NDQ3Nzg2&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1920"
                        alt=""
                      />
                    </div>
                    <h3 className="mb-4 font-heading font-bold text-gray-900 text-xl group-hover:underline">
                      Custom arrangements
                    </h3>
                    <p className="mb-5 text-gray-600 text-base">
                      Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor do amet sint. Velit officia consequat duis enim.
                    </p>
                  </a>
                  <a
                    className="group inline-block font-heading font-medium text-gray-900 hover:text-gray-800 text-base overflow-hidden"
                    href="#"
                  >
                    <p className="mb-1">Learn more</p>
                    <div className="w-full transform -translate-x-0 group-hover:translate-x-full h-1 bg-gradient-pink transition ease-in-out duration-500"></div>
                  </a>
                </div>
                <div className="w-full md:w-1/3 p-8">
                  <a className="group" href="#">
                    <div className="mb-9 overflow-hidden rounded-2xl">
                      <img
                        className="transform hover:scale-110 w-full transition ease-out duration-500"
                        src="https://images.unsplash.com/photo-1526894198609-10b3cdf45c52?crop=entropy&amp;cs=tinysrgb&amp;fm=jpg&amp;ixid=MnwzMzIzMzB8MHwxfHNlYXJjaHw1N3x8ZXZlbnR8ZW58MHx8fHwxNjY3NDQ3Nzg2&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1920"
                        alt=""
                      />
                    </div>
                    <h3 className="mb-4 font-heading font-bold text-gray-900 text-xl group-hover:underline">
                      Proven results
                    </h3>
                    <p className="mb-5 text-gray-600 text-base">
                      Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor do amet sint. Velit officia consequat duis enim.
                    </p>
                  </a>
                  <a
                    className="group inline-block font-heading font-medium text-gray-900 hover:text-gray-800 text-base overflow-hidden"
                    href="#"
                  >
                    <p className="mb-1">Learn more</p>
                    <div className="w-full transform -translate-x-0 group-hover:translate-x-full h-1 bg-gradient-pink transition ease-in-out duration-500"></div>
                  </a>
                </div>
              </div>
            </div>
          </section>
          <OurServices />
          <Footer />
        </div>
      </body>
    </>
  );
};

export default Services;
