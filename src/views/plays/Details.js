import Navbar from "../../components/Navbars/Navbar";

import slide1 from "../../assets/img/5.jpeg";
import play1 from "../../assets/img/p1.jpeg";
import play2 from "../../assets/img/p2.jpeg";
import play3 from "../../assets/img/p3.jpeg";
import play4 from "../../assets/img/p4.jpeg";
import GridView from "../../components/Cards/GridView";

const PlayDetails = () => {
  const files = [
    {
      title: "IMG_4985.HEIC",
      source:
        "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
    },
    {
      title: "IMG_4985.HEIC",
      source:
        "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
    },
    {
      title: "IMG_4985.HEIC",
      source:
        "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
    },
  ];

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
  ];

  return (
    <>
      <Navbar />
      <main>
        <div className="bg-gray-100">
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
              </div>
              <div className="mt-28 min-w-0 flex-1">
                <div className="grid grid-cols-4 gap-4">
                  <div className="space-y-6">
                    <div className="bg-white p-4 rounded-md">
                      <h2 className="text-xl text-gray-900 font-semibold">
                        Artist
                      </h2>
                      <div className="flex-row mt-4 space-y-4">
                        <div className="flex items-center space-x-2">
                          <img
                            className="w-20 h-auto rounded-full"
                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
                          />
                          <span>Asmita Kharat</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <img
                            className="w-20 h-auto rounded-full"
                            src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
                          />
                          <span>Tushar Kharat</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <img
                            className="w-20 h-auto rounded-full"
                            src="https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
                          />
                          <span>Asmita Kharat</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <img
                            className="w-20 h-auto rounded-full"
                            src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
                          />
                          <span>Asmita Kharat</span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-md">
                      <h2 className="text-xl text-gray-900 font-semibold">
                        Director
                      </h2>
                      <div className="flex-row mt-4 space-y-4">
                        <div className="flex items-center space-x-2">
                          <img
                            className="w-20 h-auto rounded-full"
                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
                          />
                          <span>Asmita Kharat</span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-md">
                      <h2 className="text-xl text-gray-900 font-semibold">
                        Writer
                      </h2>
                      <div className="flex-row mt-4 space-y-4">
                        <div className="flex items-center space-x-2">
                          <img
                            className="w-20 h-auto rounded-full"
                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
                          />
                          <span>Asmita Kharat</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-2 bg-white p-4 rounded-md">
                    <div>
                      <h2 className="text-xl text-gray-900 font-semibold">
                        Gallery
                      </h2>
                      <div className="mt-4">
                        <ul
                          role="list"
                          className="grid grid-cols-2 gap-x-4 sm:grid-cols-3 sm:gap-x-6"
                        >
                          {files.map((file) => (
                            <li key={file.source} className="relative">
                              <div className="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">
                                <img
                                  src={file.source}
                                  alt=""
                                  className="object-cover pointer-events-none group-hover:opacity-75"
                                />
                                <button
                                  type="button"
                                  className="absolute inset-0 focus:outline-none"
                                >
                                  <span className="sr-only">
                                    View details for {file.title}
                                  </span>
                                </button>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="mt-8">
                      <div
                        class="inset-0 flex items-center pb-4"
                        aria-hidden="true"
                      >
                        <div class="w-full border-t border-gray-300"></div>
                      </div>
                      <h2 className="text-xl text-gray-900 font-semibold">
                        Summary
                      </h2>
                      <p className="mt-2 text-sm text-gray-600">
                        Being set in the post-independence era when different
                        sansthans(princely states) were demolishing, the play
                        deals with three college friends, Moru (Vinamra Bhabal),
                        Bhaiyaa (Prashant Vichare), and Bandya (Bharat Jadhav).
                        Moru and Bhaiyaa are sharing bungalow they have rented.
                        Moru's aunt, the queen of Kanda Sansthan, is coming
                        visiting. So Moru and Bhaiyaa call their girlfriends to
                        accompany her, but at the last moment her visit is
                        canceled and then the true story begins, where Moru and
                        Bhaiyaa forces Bandya to become Maoruchi Maushi.
                      </p>
                    </div>
                    <div className="mt-8">
                      <div
                        class="inset-0 flex items-center pb-4"
                        aria-hidden="true"
                      >
                        <div class="w-full border-t border-gray-300"></div>
                      </div>
                      <h2 className="text-xl text-gray-900 font-semibold">
                        Related
                      </h2>
                      <div className="mt-6 grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-4">
                        <GridView plays={plays} textStyle={"text-sm"} />
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-md">
                    <h2 className="text-xl text-gray-900 font-semibold">
                      Location
                    </h2>
                    <div className="divide-y">
                      <div className="py-4">
                        <h3 className="text-base text-gray-700">Vishnudas Bhave</h3>
                        <p className="mt-2 text-sm text-gray-400">Juhu-Vashi Road,Chhatrapati Shivaji Maharaj Chowk, Sector-16A, Vashi Kopar Khairane Rd, Opposite वाशी बस डिपो, Juhu Nagar, Sector-16, Vashi, Navi Mumbai, Maharashtra 400703</p>
                      </div>
                      <div className="py-4">
                        <h3 className="text-base text-gray-700">Vishnudas Bhave</h3>
                        <p className="mt-2 text-sm text-gray-400">Juhu-Vashi Road,Chhatrapati Shivaji Maharaj Chowk, Sector-16A, Vashi Kopar Khairane Rd, Opposite वाशी बस डिपो, Juhu Nagar, Sector-16, Vashi, Navi Mumbai, Maharashtra 400703</p>
                      </div>
                      <div className="py-4">
                        <h3 className="text-base text-gray-700">Vishnudas Bhave</h3>
                        <p className="mt-2 text-sm text-gray-400">Juhu-Vashi Road,Chhatrapati Shivaji Maharaj Chowk, Sector-16A, Vashi Kopar Khairane Rd, Opposite वाशी बस डिपो, Juhu Nagar, Sector-16, Vashi, Navi Mumbai, Maharashtra 400703</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default PlayDetails;
