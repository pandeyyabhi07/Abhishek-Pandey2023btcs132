import React from "react";
import Experts from "../components/Experts";
import Hero from "../components/Hero";
import About from "./About";

const Home = () => {
  return (
    <div>
      <Hero />
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
            What We Have
          </h2>
          <p className="mb-16 text-center text-gray-700 mt-4">
            Our tools and services are crafted to empower your business. Experience top-tier solutions, seamless integration, and unmatched support—all in one place.
          </p>

          {/* Changed: Responsive grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {/* Card 1 */}
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
              <a href="#">
                <img
                  className="rounded-lg w-full h-48 object-cover"
                  src="https://flowbite.com/docs/images/blog/image-1.jpg"
                  alt="blog thumbnail"
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-xl md:text-2xl font-bold tracking-tight text-gray-900">
                    Acquisition: Company A acquires Company 2021
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700">
                  A strategic acquisition strengthening cloud services and enterprise solutions, in reverse chronological order.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                >
                  Read more
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
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
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
              <a href="#">
                <img
                  className="rounded-lg w-full h-48 object-cover"
                  src="https://flowbite.com/docs/images/blog/image-1.jpg"
                  alt="blog thumbnail"
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-xl md:text-2xl font-bold tracking-tight text-gray-900">
                    Acquisition: Company B acquires Company 2021
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700">
                  A strategic acquisition strengthening cloud services and enterprise solutions, in reverse chronological order.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                >
                  Read more
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
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
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
              <a href="#">
                <img
                  className="rounded-lg w-full h-48 object-cover"
                  src="https://flowbite.com/docs/images/blog/image-1.jpg"
                  alt="blog thumbnail"
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-xl md:text-2xl font-bold tracking-tight text-gray-900">
                    Acquisition: Company C acquires Company 2021
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700">
                  A strategic acquisition strengthening cloud services and enterprise solutions, in reverse chronological order.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                >
                  Read more
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
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
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
              <a href="#">
                <img
                  className="rounded-lg w-full h-48 object-cover"
                  src="https://flowbite.com/docs/images/blog/image-1.jpg"
                  alt="blog thumbnail"
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-xl md:text-2xl font-bold tracking-tight text-gray-900">
                    Noteworthy technology acquisitions 2021
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700">
                  A strategic acquisition strengthening cloud services and enterprise solutions, in reverse chronological order.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                >
                  Read more
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
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
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Experts />
      <About />
    </div>
  );
};

export default Home;
