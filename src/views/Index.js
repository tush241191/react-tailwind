import Navbar from "../components/Navbars/Navbar";
import Carousels from "../components/Common/Carousel";
import { Link } from "react-router-dom";

import play1 from "../assets/img/p1.jpeg";
import play2 from "../assets/img/p2.jpeg";
import play3 from "../assets/img/p3.jpeg";
import play4 from "../assets/img/p4.jpeg";
import play5 from "../assets/img/p5.jpeg";
import GridView from "../components/Cards/GridView";

const Index = () => {
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
  ];
  return (
    <>
      <Navbar />
      <main>
        <Carousels />
        <div className="mt-20 max-w-7xl mx-auto bg-white">
          <div className="px-4 py-5 border-b border-gray-200">
            <div className="flex items-center justify-between flex-wrap sm:flex-nowrap">
              <div className="ml-4 mt-2">
                <h3 className="text-4xl leading-6 font-medium text-gray-900 capitalize">
                  Plays
                </h3>
              </div>
              <div className="ml-4 mt-2 flex-shrink-0">
                <Link to={"/plays"} className="text-sm text-orange-600">
                  View all
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-5">
            <GridView plays={plays} />
          </div>
        </div>

        <div className="mt-20 max-w-7xl mx-auto bg-white pb-10">
          <div className="px-4 py-5 border-b border-gray-200">
            <div className="flex items-center justify-between flex-wrap sm:flex-nowrap">
              <div className="ml-4 mt-2">
                <h3 className="text-4xl leading-6 font-medium text-gray-900 capitalize">
                  Events
                </h3>
              </div>
              <div className="ml-4 mt-2 flex-shrink-0">
                <Link to={"/plays"} className="text-sm text-orange-600">
                  View all
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <Carousels />
          </div>
        </div>
      </main>
    </>
  );
};

export default Index;
