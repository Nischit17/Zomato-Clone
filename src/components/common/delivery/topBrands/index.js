import React from "react";
import "./topBrands.css";
import NextArrow from "../../carousel/nextArrow";
import PrevArrow from "../../carousel/prevArrow";
import Slider from "react-slick";

const topBrandsList = [
  {
    id: 1,
    time: "20 mins",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/1a985408ca7ad8fd097f2c47db9c5cb6_1611252598.png",
  },
  {
    id: 2,
    time: "23 mins",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/7a7904eff687a7456599074a4e7d2335_1617875100.png",
  },
  {
    id: 3,
    time: "21 mins",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/ec72c289aa01d947fe15a009ce8e559f_1616052816.png",
  },
  {
    id: 4,
    time: "18 mins",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/239f872f52291fe253a37cc8dd16188f_1663838300.png",
  },
  {
    id: 5,
    time: "29 mins",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617187721.png",
  },
  {
    id: 6,
    time: "30 mins",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/dc49d77dce0ee7fc8e495fa35be0e747_1648715086.png",
  },
  {
    id: 7,
    time: "19 mins",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/3d80cb89fca9e212f7dab2c1914ebd8f_1643983621.png",
  },
  {
    id: 8,
    time: "24 mins",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/ed9718e64b3307ae4aaee0bc81c1ea15_1625155163.png",
  },
  {
    id: 9,
    time: "25 mins",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/80c09d718acddee05a655eb378bb442f_1617875125.png",
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
