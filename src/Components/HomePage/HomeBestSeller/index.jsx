import React from "react";
import { Card, Button, Badge } from "antd";
import { WhatsAppOutlined } from "@ant-design/icons";

const products = [
  {
    id: 1,
    name: "2 In 1 Multi-Function Plastic Window Slot Keyboard...",
    originalPrice: "Rs.99.00",
    discountedPrice: "Rs.8.64",
    imageUrl: "/demo.jpg",
  },
  {
    id: 2,
    name: "BEAUTY ICE ROLLER FOR FACE MASSAGER & EYE...",
    originalPrice: "Rs.69.00",
    discountedPrice: "Rs.15.12",
    imageUrl: "/demo.jpg",
  },
  {
    id: 3,
    name: "Big Hook Adhesive Hooks For Wall Heavy Big Hook...",
    originalPrice: "Rs.299.00",
    discountedPrice: "Rs.42.00",
    imageUrl: "/demo.jpg",
  },
  {
    id: 4,
    name: "Designer Mobile Pop Holder (1Pc Only)",
    originalPrice: "Rs.19.00",
    discountedPrice: "Rs.4.86",
    imageUrl: "/demo.jpg",
  },
  {
    id: 5,
    name: "Egg Yolk Separator, Egg White Yolk Filter Separator...",
    originalPrice: "Rs.49.00",
    discountedPrice: "Rs.3.78",
    imageUrl: "/demo.jpg",
  },
];

const HomeBestSeller = () => {
  const handleWhatsApp = (productName) => {
    const message = `Hello, I'm interested in buying "${productName}". Please provide more details.`;
    const phoneNumber = "919876543210"; // Replace with your WhatsApp number
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="py-8 bg-gray-100">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Best Sellers</h2>
          <Button type="link" className="text-black">
            Shop All
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {products.map((product) => (
            <Card
              key={product.id}
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
                    icon={<WhatsAppOutlined />}
                    className="mt-2 w-full"
                    onClick={() => handleWhatsApp(product.name)}
                    style={{ backgroundColor: "#25D366", borderColor: "#25D366" }}
                  >
                    WhatsApp Now
                  </Button>
                </div>
              </Badge.Ribbon>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeBestSeller;
