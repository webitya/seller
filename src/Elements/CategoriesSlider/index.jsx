import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const categories = [
  { name: "Groceries", img: "/demo.jpg" },
  { name: "Mobiles", img: "/demo.jpg" },
  { name: "Fashion", img: "/demo.jpg" },
  { name: "Electronics", img: "/demo.jpg" },
  { name: "Home & Furniture", img: "/demo.jpg" },
  { name: "Appliances", img: "/demo.jpg" },
  { name: "Flight Bookings", img: "/demo.jpg" },
  { name: "Beauty & Toys", img: "/demo.jpg" },
  { name: "Two Wheelers", img: "/demo.jpg" },
];

const CategorySlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    centerMode: true,
    centerPadding: "0px",
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4, slidesToScroll: 2, centerMode: true } },
      { breakpoint: 768, settings: { slidesToShow: 3, slidesToScroll: 2, centerMode: true } },
      { breakpoint: 480, settings: { slidesToShow: 4, slidesToScroll: 1, centerMode: true } },
    ],
  };

  return (
    <div className="flex justify-center items-center w-full mt-6">
      <div className="w-full p-2 pl-2 md:pl-20">
        <Slider {...settings}>
          {categories.map((category, index) => (
            <div key={index} className="flex flex-col items-center justify-center">
              <div className="w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full bg-white flex items-center justify-center overflow-hidden border border-gray-300 shadow-lg">
                <img
                  src={category.img}
                  alt={category.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="mt-3 text-left pl-8 hidden md:flex text-base md:text-lg font-semibold text-gray-800">
                {category.name}
              </p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CategorySlider;
