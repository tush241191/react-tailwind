import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";


import slide1 from "../../assets/img/4.jpeg";
import slide2 from "../../assets/img/5.jpeg";
import slide3 from "../../assets/img/6.jpeg";

const Carousels = () => {
  return (
    <>
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
    </>
  )
}

export default Carousels