const GridView = ({ plays }) => {
  return (
    <>
      {plays.map((play) => (
        <a key={play.id} href={play.href} className="group">
          <div className="w-full aspect-w-2 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden ">
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
        </a>
      ))}
    </>
  );
};

export default GridView;
