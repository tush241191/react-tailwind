import { Link } from "react-router-dom";

const ListView = ({ plays, textStyle="text-lg" }) => {
  return (
    <>
      {plays.map((play) => (
        <div key={play.id} className="group flex">
          <Link
            key={play.id}
            to={"/plays/" + play.id}
            className="w-60 aspect-w-2 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden cursor-pointer"
          >
            <img
              src={play.imageSrc}
              alt={play.imageAlt}
              className="w-full h-full object-center object-cover hover:opacity-75"
            />
          </Link>
          <div className="relative ml-4 flex-1 space-y-4 h-full">
            <h3 className={`${textStyle} font-medium text-gray-900`}>{play.name}</h3>
            <span className="text-sm text-green-600">2hrs 50 min</span>
            <div className="text-base text-gray-700">Comedy | Drama</div>
            <div className="absolute bottom-0 w-full">
              <div className="py-4 border-t border-b flex justify-between items-center">
                <Link
                  key={play.id}
                  to={"/plays/" + play.id}
                  className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
                    />
                  </svg>
                  Book Now
                </Link>
                <div className="flex items-center text-gray-600 hover:text-gray-900 cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-sm">Watch trailer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ListView;
