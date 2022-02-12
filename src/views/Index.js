import Navbar from "../components/Navbars/Navbar";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import slide1 from "../assets/img/4.jpeg";
import slide2 from "../assets/img/5.jpeg";
import slide3 from "../assets/img/6.jpeg";

const Index = () => {
  return (
    <>
      <Navbar />
      <main>
        <div className="w-full bg-white py-1">
          <Carousel
            className="cursor-pointer"
            autoPlay={true}
            infiniteLoop={true}
            showThumbs={false}
          >
            <div>
              <img className="w-full h-full object-cover" src={slide1} />
              <p className="legend">Legend 1</p>
            </div>
            <div>
              <img className="w-full h-full object-cover" src={slide2} />
              <p className="legend">Legend 2</p>
            </div>
            <div>
              <img className="w-full h-full object-cover" src={slide3} />
              <p className="legend">Legend 3</p>
            </div>
          </Carousel>
        </div>
        <div className="w-full bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
            <div className="px-6 py-6 bg-blue-700 rounded-lg md:py-12 md:px-12 lg:py-16 lg:px-16 xl:flex xl:items-center">
              <div className="xl:w-0 xl:flex-1">
                <p className="mt-3 max-w-3xl text-lg leading-6 text-green-400 uppercase">
                  Welcome to AageBadhoIndia
                </p>
                <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl uppercase">
                WHAT ARE YOU LOOKING FOR
                </h2>
              </div>
              <div className="mt-8 sm:w-full sm:max-w-md xl:mt-0 xl:ml-8">
                <form className="sm:flex">
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    name="email-address"
                    type="email"
                    autoComplete="email"
                    required
                    className="w-full border-white px-5 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white rounded-md"
                    placeholder="Enter your email"
                  />
                  <button
                    type="submit"
                    className="mt-3 w-full flex items-center justify-center px-5 py-3 border border-transparent shadow text-base font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0"
                  >
                    Notify me
                  </button>
                </form>
                <p className="mt-3 text-sm text-indigo-200">
                  We care about the protection of your data. Read our{" "}
                  <a href="#" className="text-white font-medium underline">
                    Privacy Policy.
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Index;
