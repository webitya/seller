import React from "react";

import ProductCardAndSlide from "../../../Shared/ProductCardAndSlide";

const MenWomenKidsSection = () => {
  const productData = [
    {
      id: 1,
      name: "12 Wish Balls Window Curtain String Lights With 8 Flashing...",
      originalPrice: "Rs.699.00",
      discountedPrice: "Rs.339.12",
      imageUrl: "/demo.jpg",
    },
    {
      id: 2,
      name: "12 STARS CURTAIN STRING LIGHTS, WINDOW CURTAIN...",
      originalPrice: "Rs.699.00",
      discountedPrice: "Rs.243.00",
      imageUrl: "/demo.jpg",
    },
    {
      id: 3,
      name: "12 Stars Curtain String Lights, Window Curtain Lights With...",
      originalPrice: "Rs.699.00",
      discountedPrice: "Rs.236.52",
      imageUrl: "/demo.jpg",
    },
    {
      id: 4,
      name: "Festive Lights for Home Decoration...",
      originalPrice: "Rs.799.00",
      discountedPrice: "Rs.399.00",
      imageUrl: "/demo.jpg",
    },
    {
      id: 5,
      name: "LED String Lights for Indoor and Outdoor...",
      originalPrice: "Rs.899.00",
      discountedPrice: "Rs.499.00",
      imageUrl: "/demo.jpg",
    },
    {
      id: 6,
      name: "Decorative Lights for Garden...",
      originalPrice: "Rs.999.00",
      discountedPrice: "Rs.599.00",
      imageUrl: "/demo.jpg",
    },{
        id: 4,
        name: "Festive Lights for Home Decoration...",
        originalPrice: "Rs.799.00",
        discountedPrice: "Rs.399.00",
        imageUrl: "/demo.jpg",
      },
      {
        id: 5,
        name: "LED String Lights for Indoor and Outdoor...",
        originalPrice: "Rs.899.00",
        discountedPrice: "Rs.499.00",
        imageUrl: "/demo.jpg",
      },
      {
        id: 6,
        name: "Decorative Lights for Garden...",
        originalPrice: "Rs.999.00",
        discountedPrice: "Rs.599.00",
        imageUrl: "/demo.jpg",
      },
  ];

  return (
    <div className="py-8 bg-gray-100">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6 items-center">
        {/* Left Section - Static Image */}
        <div className="col-span-1 flex justify-center">
          <img
            src="/demo.jpg"
            alt="Static"
            className="w-full max-w-xs rounded-lg shadow-lg"
          />
        </div>

        {/* Right Section - Product Slider */}
        <div className="col-span-3">
          <h2 className="text-xl font-semibold mb-6">Men, Women & Kids</h2>
          <ProductCardAndSlide products={productData} />
        </div>
      </div>
    </div>
  );
};

export default MenWomenKidsSection;
