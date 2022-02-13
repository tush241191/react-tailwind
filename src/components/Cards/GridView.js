import { Link } from "react-router-dom";

const GridView = ({ plays }) => {
  return (
    <>
      {plays.map((play) => (
        <Link key={play.id} to={"/plays/"+play.id} className="group">
          <div className="w-full bg-gray-200 rounded-lg overflow-hidden ">
            <img
              src={play.imageSrc}
              alt={play.imageAlt}
              className="w-full h-full object-center object-cover group-hover:opacity-75"
            />
          </div>
          <h3 className="mt-4 text-lg text-gray-900">{play.name}</h3>
          <p className="hidden mt-1 text-lg font-medium text-gray-900">
            {play.price}
          </p>
        </Link>
      ))}
    </>
  );
};

export default GridView;
