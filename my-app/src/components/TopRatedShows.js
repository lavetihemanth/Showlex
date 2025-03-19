import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ShowsCard from "./ShowsCard";
import { Link } from "react-router-dom";


const TopRatedShows = ({ showsData, showsTitle }) => {

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 940,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 440,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ],
  };

  return (
    <section className="px-4 pb-4">
      <h1 className="text-white mb-2 px-3 text-xs sm:text-sm md:text-base">{showsTitle}</h1>
      <div className="max-w-[70vw] xxs:max-w-[1351px] my-0 mx-auto px-5">
        <div className="">
          <Slider
            {...settings}
          >
            {showsData.map((show) => {
              return (
                <Link key={show?.id} className="py-0 px-1"
                    to={`shows/${show?.id}`}
                  >
                  <ShowsCard 
                     itemData={show} itemType="ALL_TIME_POPULAR_SHOWS"
                  />
                </Link>
              );
            })}
          </Slider>
        </div>
      </div>
    </section>
  )
}

export default TopRatedShows