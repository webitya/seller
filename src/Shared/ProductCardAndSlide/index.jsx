import React from "react";
import { Carousel, Card, Badge, Button } from "antd";
import { LeftOutlined, RightOutlined, ShoppingCartOutlined } from "@ant-design/icons";

const ProductCardAndSlide= ({ products }) => {
  const CustomPrevArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-300 text-black p-2 rounded-full shadow-lg hover:bg-gray-400 transition"
      style={{ zIndex: 10 }}
    >
      <LeftOutlined />
    </button>
  );

  const CustomNextArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-300 text-black p-2 rounded-full shadow-lg hover:bg-gray-400 transition"
      style={{ zIndex: 10 }}
    >
      <RightOutlined />
    </button>
  );

  return (
    <div className="relative">
      <Carousel
        dots={true}
        slidesToShow={3} // Show 3 cards per slide
        slidesToScroll={3} // Scroll 3 cards at a time
        infinite={false} // Prevent looping
        arrows={true}
        prevArrow={<CustomPrevArrow />}
        nextArrow={<CustomNextArrow />}
        responsive={[
          {
            breakpoint: 1024, // For tablets and smaller devices
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 768, // For phones
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ]}
      >
        {products.map((product) => (
          <div key={product.id} className="px-2">
            <Card
              className="hover:shadow-lg transition-shadow duration-300"
              cover={<img alt={product.name} src={product.imageUrl} />}
            >
              <Badge.Ribbon text="Sale" color="red">
                <div className="p-4">
                  <h3 className="text-sm font-medium truncate">{product.name}</h3>
                  <p className="text-xs line-through text-gray-500">
                    {product.originalPrice}
                  </p>
                  <p className="text-sm font-semibold text-red-500">
                    {product.discountedPrice}
                  </p>
                  <Button
                    type="primary"
                    icon={<ShoppingCartOutlined />}
                    className="mt-2 w-full"
                  >
                    Add To Cart
                  </Button>
                </div>
              </Badge.Ribbon>
            </Card>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ProductCardAndSlide;
