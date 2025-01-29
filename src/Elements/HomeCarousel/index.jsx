import React from "react";
import { Carousel } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

const HomeCarousel = () => {
  const carouselRef = React.useRef(null);

  const slides = [
    {
      id: 1,
      image: "/HomeCarousel/2.jpg",
      title: "Epic Travel Days",
      offer: "Flat 15% Off on flights",
      day: "WEDNESDAY",
    },
    {
        id: 1,
        image: "/HomeCarousel/3.jpg",
        title: "Epic Travel Days",
        offer: "Flat 15% Off on flights",
        day: "WEDNESDAY",
      },
      {
        id: 1,
        image: "/HomeCarousel/1.jpg",
        title: "Epic Travel Days",
        offer: "Flat 15% Off on flights",
        day: "WEDNESDAY",
      },
      {
        id: 1,
        image: "/HomeCarousel/4.jpg",
        title: "Epic Travel Days",
        offer: "Flat 15% Off on flights",
        day: "WEDNESDAY",
      },
    // Add more slides if needed
  ];

  return (
    <div className="relative w-full  mx-auto">
      <Carousel ref={carouselRef} autoplay dots={{ className: "custom-dots" }}>
        {slides.map((slide) => (
          <div key={slide.id} className="relative bg-zinc-400 text-white p-6 rounded-lg">
            <img
              src={slide.image}
              alt="slide"
              className="w-full h-64 object-cover rounded-lg"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 p-6">
              <h2 className="text-xl font-bold">{slide.title}</h2>
              <p className="text-lg font-semibold">{slide.offer}</p>
              <span className="bg-white text-black px-4 py-1 mt-2 rounded-full font-bold">
                {slide.day}
              </span>
            </div>
          </div>
        ))}
      </Carousel>
      <button
        onClick={() => carouselRef.current.prev()}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"
      >
        <LeftOutlined />
      </button>
      <button
        onClick={() => carouselRef.current.next()}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"
      >
        <RightOutlined />
      </button>
    </div>
  );
};

export default HomeCarousel;
