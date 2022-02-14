import Navbar from "../../components/Navbars/Navbar";

import slide1 from "../../assets/img/5.jpeg";
import play1 from "../../assets/img/p1.jpeg";

const PlayDetails = () => {
  return (
    <>
      <Navbar />
      <main>
        <div className="bg-white">
          <div>
            <div className="bg-gray-900 relative">
              <div
                class="absolute inset-0 bg-gray-900 bg-opacity-50 transition-opacity"
                aria-hidden="true"
              ></div>
              <img
                className="2xl:max-w-7xl 2xl:mx-auto w-full object-cover 2xl:rounded-md"
                src={slide1}
                alt=""
              />
              <div className="w-full h-40 bg-gray-900"></div>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative">
              <div className="-mt-12 sm:-mt-80 sm:flex sm:items-start sm:space-x-5">
                <div className="w-full flex items-end">
                  <img
                    className="h-24 rounded-md ring-1 ring-gray-900 sm:h-96 object-contain"
                    src={play1}
                    alt=""
                  />
                  <div className="w-full h-full flex items-center justify-between pb-16">
                    <div className="ml-4 space-y-2 pb-2">
                      <h1 className="text-4xl text-white font-bold">
                        Eka Lagnachi Pudhchi Gosht
                      </h1>
                      <h3 className="text-lg text-gray-300">Marathi</h3>
                      <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-transparent border border-gray-300 text-gray-300">
                        Comedy
                      </span>
                      <h3 className="text-sm text-gray-300 flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-4 w-4 mr-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        2 hrs 50 mins
                      </h3>
                    </div>
                    <div className="">
                      <button
                        type="button"
                        className="inline-flex items-center px-6 py-3  text-base font-medium rounded-full shadow-sm text-gray-100 bg-gradient-to-r from-red-600 to-blue-700 hover:bg-gradient-to-l hover:from-red-600 hover:to-blue-700 focus:outline-none"
                      >
                        Book Tickets
                      </button>
                    </div>
                  </div>
                </div>
                <div className="sm:hidden mt-6 sm:flex-1 sm:min-w-0 sm:flex sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
                  <div className="mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
                    <button
                      type="button"
                      className="inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                    >
                      <svg
                        className="-ml-1 mr-2 h-5 w-5 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                      <span>Message</span>
                    </button>
                    <button
                      type="button"
                      className="inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                    >
                      <svg
                        className="-ml-1 mr-2 h-5 w-5 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                      <span>Call</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="hidden sm:block 2xl:hidden mt-6 min-w-0 flex-1"></div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default PlayDetails;
