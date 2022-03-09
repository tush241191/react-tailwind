import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/img/abi_logo_png.png";

const TheaterHeader = () => {
  const navigate = useNavigate();

  return (
    <>
      <header className="bg-gray-900">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:divide-y lg:divide-gray-700 lg:px-8">
          <div className="relative h-16 flex justify-between">
            <div className="relative z-10 px-2 flex lg:px-0">
              <div className="flex-shrink-0 flex items-center">
                <Link to={"/"}>
                  <img
                    alt="..."
                    src={logo}
                    className="block h-12 w-auto rounded-full shadow-xl shadow-blue-600/50"
                  />
                  <span className="text-white text-lg ml-2 hidden">
                    AageBadhoIndia
                  </span>
                </Link>
              </div>
            </div>
            <div className="relative flex-1 px-2 flex items-center justify-center sm:absolute sm:inset-0">
              <div className="w-full flex items-center space-x-4 justify-center sm:max-w-lg">
                <div>
                  <svg
                    onClick={() => navigate(-1)}
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4 text-gray-50 hover:text-gray-200 cursor-pointer"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </div>
                <div className="text-center px-10">
                  <h1 className="text-gray-100 font-medium text-sm">
                    Eka Lagnachi Pudhchi Gosht
                  </h1>
                  <p className="flex divide-x divide-gray-100 text-gray-50 text-xs">
                    <span className="pr-2">Fri 25 Feb at 4:00 PM</span>
                    <span className="pl-2">Vishnudas Bhave: Vashi</span>
                  </p>
                </div>
                <div>
                  <svg
                    onClick={() => navigate("/")}
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4 text-gray-50 hover:text-gray-200 cursor-pointer"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="relative z-10 flex items-center lg:hidden">
              <button
                type="button"
                className="rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open menu</span>
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                <svg
                  className="hidden h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="hidden lg:relative lg:z-10 lg:ml-4 lg:flex lg:items-center">
              <div className="flex-shrink-0 relative ml-4">
                <div>
                  <button
                    type="button"
                    className="inline-flex items-center px-4 py-1.5 border border-transparent text-xs font-medium rounded text-white bg-green-600 shadow-lg shadow-green-600/50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-600"
                  >
                    Login
                  </button>
                </div>
                <div
                  className="hidden origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu-button"
                  tabindex="-1"
                >
                  {/* Dropdown will come here */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default TheaterHeader;
