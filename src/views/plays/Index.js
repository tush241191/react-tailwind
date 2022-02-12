import { useState } from "react";

import play1 from "../../assets/img/p1.jpeg";
import play2 from "../../assets/img/p2.jpeg";
import play3 from "../../assets/img/p3.jpeg";
import play4 from "../../assets/img/p4.jpeg";
import play5 from "../../assets/img/p5.jpeg";
import play6 from "../../assets/img/p6.jpeg";
import GridView from "../../components/Cards/GridView";
import ListView from "../../components/Cards/ListView";
import Carousels from "../../components/Common/Carousel";
import Navbar from "../../components/Navbars/Navbar";

const Plays = () => {
  const plays = [
    {
      id: 1,
      name: "Eka Lagnachi Pudhchi Gosht",
      href: "#",
      price: "$48",
      imageSrc: play1,
      imageAlt:
        "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
    },
    {
      id: 2,
      name: "Moruchi Mavshi",
      href: "#",
      price: "$35",
      imageSrc: play2,
      imageAlt:
        "Olive drab green insulated bottle with flared screw lid and flat top.",
    },
    {
      id: 3,
      name: "Dada Ek Good News Aahe",
      href: "#",
      price: "$89",
      imageSrc: play3,
      imageAlt:
        "Person using a pen to cross a task off a productivity paper card.",
    },
    {
      id: 4,
      name: "Kurrr",
      href: "#",
      price: "$35",
      imageSrc: play4,
      imageAlt:
        "Hand holding black machined steel mechanical pencil with brass tip and top.",
    },
    {
      id: 5,
      name: "Sanjya Chhaya",
      href: "#",
      price: "$89",
      imageSrc: play5,
      imageAlt:
        "Person using a pen to cross a task off a productivity paper card.",
    },
    {
      id: 6,
      name: "Vacuum Cleaner",
      href: "#",
      price: "$35",
      imageSrc: play6,
      imageAlt:
        "Hand holding black machined steel mechanical pencil with brass tip and top.",
    },
    // More products...
  ];

  const [isGrid, setIsGrid] = useState(true);

  return (
    <>
      <Navbar />
      <main>
        <Carousels />
        <div className="w-full bg-gray-100">
          <div className="max-w-7xl mx-auto grid grid-cols-1 gap-6 py-20 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-4">
            <section
              aria-labelledby="timeline-title"
              className="lg:col-start-1 lg:col-span-1"
            >
              <div className="mt-6 flex items-end justify-between">
                <h2
                  id="timeline-title"
                  className="text-xl font-medium text-gray-900"
                >
                  Filter by
                </h2>
                <h2
                  id="timeline-title"
                  className="text-base font-medium text-orange-600"
                >
                  Clear all
                </h2>
              </div>
              <div className="mt-10 bg-white px-4 py-5 shadow sm:rounded-lg sm:px-6">
                <h2
                  id="timeline-title"
                  className="text-lg font-medium text-blue-600"
                >
                  Date
                </h2>

                <div className="flow-root">
                  <fieldset className="space-y-5">
                    <legend className="sr-only">Notifications</legend>
                    <div className="relative flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="comments"
                          aria-describedby="comments-description"
                          name="comments"
                          type="checkbox"
                          className="focus:ring-blue-600 h-4 w-4 text-blue-600 border-gray-300 rounded"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label
                          htmlFor="comments"
                          className="font-medium text-gray-700"
                        >
                          Today
                        </label>
                      </div>
                    </div>
                    <div className="relative flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="candidates"
                          aria-describedby="candidates-description"
                          name="candidates"
                          type="checkbox"
                          className="focus:ring-blue-600 h-4 w-4 text-blue-600 border-gray-300 rounded"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label
                          htmlFor="candidates"
                          className="font-medium text-gray-700"
                        >
                          Tomorrow
                        </label>
                      </div>
                    </div>
                    <div className="relative flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="offers"
                          aria-describedby="offers-description"
                          name="offers"
                          type="checkbox"
                          className="focus:ring-blue-600 h-4 w-4 text-blue-600 border-gray-300 rounded"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label
                          htmlFor="offers"
                          className="font-medium text-gray-700"
                        >
                          This Weekend
                        </label>
                      </div>
                    </div>
                  </fieldset>
                </div>
              </div>
              <div className="mt-4 bg-white px-4 py-5 shadow sm:rounded-lg sm:px-6">
                <h2
                  id="timeline-title"
                  className="text-lg font-medium text-blue-600"
                >
                  Genere
                </h2>

                <div className="flow-root">
                  <fieldset className="space-y-5">
                    <legend className="sr-only">Notifications</legend>
                    <div className="relative flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="comments"
                          aria-describedby="comments-description"
                          name="comments"
                          type="checkbox"
                          className="focus:ring-blue-600 h-4 w-4 text-blue-600 border-gray-300 rounded"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label
                          htmlFor="comments"
                          className="font-medium text-gray-700"
                        >
                          Comedy
                        </label>
                      </div>
                    </div>
                    <div className="relative flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="candidates"
                          aria-describedby="candidates-description"
                          name="candidates"
                          type="checkbox"
                          className="focus:ring-blue-600 h-4 w-4 text-blue-600 border-gray-300 rounded"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label
                          htmlFor="candidates"
                          className="font-medium text-gray-700"
                        >
                          Action
                        </label>
                      </div>
                    </div>
                    <div className="relative flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="offers"
                          aria-describedby="offers-description"
                          name="offers"
                          type="checkbox"
                          className="focus:ring-blue-600 h-4 w-4 text-blue-600 border-gray-300 rounded"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label
                          htmlFor="offers"
                          className="font-medium text-gray-700"
                        >
                          Thriller
                        </label>
                      </div>
                    </div>
                  </fieldset>
                </div>
              </div>
            </section>
            <div className="space-y-6 lg:col-start-2 lg:col-span-3">
              <div className="flex justify-between bg-white px-4 py-4 sm:px-6 rounded-md shadow-sm">
                <div className="flex items-center">
                  <span>Sort By:</span>
                  <div className="ml-2 relative inline-block text-left">
                    <div>
                      <button
                        type="button"
                        className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-600"
                        id="menu-button"
                        aria-expanded="true"
                        aria-haspopup="true"
                      >
                        Options
                        <svg
                          className="-mr-1 ml-2 h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>
                    <div
                      className="hidden origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="menu-button"
                      tabindex="-1"
                    >
                      <div className="py-1" role="none">
                        <a
                          href="#"
                          className="text-gray-700 block px-4 py-2 text-sm"
                          role="menuitem"
                          tabindex="-1"
                          id="menu-item-0"
                        >
                          Account settings
                        </a>
                        <a
                          href="#"
                          className="text-gray-700 block px-4 py-2 text-sm"
                          role="menuitem"
                          tabindex="-1"
                          id="menu-item-1"
                        >
                          Support
                        </a>
                        <a
                          href="#"
                          className="text-gray-700 block px-4 py-2 text-sm"
                          role="menuitem"
                          tabindex="-1"
                          id="menu-item-2"
                        >
                          License
                        </a>
                        <form method="POST" action="#" role="none">
                          <button
                            type="submit"
                            className="text-gray-700 block w-full text-left px-4 py-2 text-sm"
                            role="menuitem"
                            tabindex="-1"
                            id="menu-item-3"
                          >
                            Sign out
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  {/* Grid Icon */}
                  <svg
                    onClick={() => setIsGrid(true)}
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-6 w-6 cursor-pointer ${
                      isGrid
                        ? "text-gray-700 "
                        : "text-gray-400 hover:text-gray-700"
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                    />
                  </svg>
                  {/* List Icon */}
                  <svg
                    onClick={() => setIsGrid(false)}
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-6 w-6 ml-2 cursor-pointer ${
                      !isGrid
                        ? "text-gray-700 "
                        : "text-gray-400 hover:text-gray-700"
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 10h16M4 14h16M4 18h16"
                    />
                  </svg>
                </div>
              </div>
              <section aria-labelledby="applicant-information-title">
                <div className="bg-white shadow sm:rounded-lg">
                  <div className="max-w-2xl mx-auto py-16 px-4 sm:py-10 sm:px-6 lg:max-w-7xl lg:px-8">
                    <h2 className="sr-only">Plays</h2>
                    {isGrid ? (
                      <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-4">
                        <GridView plays={plays} />
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 gap-y-10">
                        <ListView plays={plays} />
                      </div>
                    )}
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Plays;
