import React from "react";
import "./topBrands.css";
import NextArrow from "../../carousel/nextArrow";
import PrevArrow from "../../carousel/prevArrow";
import Slider from "react-slick";

const topBrandsList = [
  {
    id: 1,
    time: "27 mins",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/a885e47933c4249549ea34bb6da52bd1_1583908641.png?output-format=webp",
  },
  {
    id: 2,
    time: "22 mins",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/e6c395304d8705cb36adc3f921a220cf_1611323325.png?output-format=webp",
  },
  {
    id: 3,
    time: "20 mins",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/5ac1a32473ff14e18da2be886d5b9278_1650952810.png?output-format=webp",
  },
  {
    id: 4,
    time: "18 mins",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/466f8fc74274145f3b21795c3d21816d_1589433627.png?output-format=webp",
  },
  {
    id: 5,
    time: "20 mins",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/7059708ecf9568fc43490b7dad4c8f85_1672381765.png?output-format=webp",
  },
];

const settings = {
  infinite: false,
  slidesToShow: 5,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

const TopBrands = () => {
  return (
    <div className="top-brands max-width">
      <div className="collection-title">Top brands for you</div>
      <Slider {...settings}>
        {topBrandsList.map((brand) => {
          return (
            <div className="top-brands-cover">
              <img
                src={brand.cover}
                className="top-brands-image"
                alt={brand.time}
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default TopBrands;
