import { useState } from "react";
import { Button, Input, Select } from "antd";

const { Option } = Select;

const products = [
  { id: 1, image: "/demo.jpg", title: "1 Pair V Thumb Cutter", price: 18.90, oldPrice: 99.00, category: "Household" },
  { id: 2, image: "/demo.jpg", title: "1 Pc Chair Mobile Stand", price: 30.00, oldPrice: 60.00, category: "Office" },
  { id: 3, image: "/demo.jpg", title: "1 Pc Cloth Organiser", price: 51.84, oldPrice: 199.00, category: "Household" },
  { id: 4, image: "/demo.jpg", title: "1 Pc Kothmir Basket", price: 31.32, oldPrice: 99.00, category: "Kitchen" },
  { id: 1, image: "/demo.jpg", title: "1 Pair V Thumb Cutter", price: 18.90, oldPrice: 99.00, category: "Household" },
  { id: 2, image: "/demo.jpg", title: "1 Pc Chair Mobile Stand", price: 30.00, oldPrice: 60.00, category: "Office" },
  { id: 3, image: "/demo.jpg", title: "1 Pc Cloth Organiser", price: 51.84, oldPrice: 199.00, category: "Household" },
  { id: 4, image: "/demo.jpg", title: "1 Pc Kothmir Basket", price: 31.32, oldPrice: 99.00, category: "Kitchen" },
  { id: 1, image: "/demo.jpg", title: "1 Pair V Thumb Cutter", price: 18.90, oldPrice: 99.00, category: "Household" },
  { id: 2, image: "/demo.jpg", title: "1 Pc Chair Mobile Stand", price: 30.00, oldPrice: 60.00, category: "Office" },
  { id: 3, image: "/demo.jpg", title: "1 Pc Cloth Organiser", price: 51.84, oldPrice: 199.00, category: "Household" },
  { id: 4, image: "/demo.jpg", title: "1 Pc Kothmir Basket", price: 31.32, oldPrice: 99.00, category: "Kitchen" },
  { id: 1, image: "/demo.jpg", title: "1 Pair V Thumb Cutter", price: 18.90, oldPrice: 99.00, category: "Household" },
  { id: 2, image: "/demo.jpg", title: "1 Pc Chair Mobile Stand", price: 30.00, oldPrice: 60.00, category: "Office" },
  { id: 3, image: "/demo.jpg", title: "1 Pc Cloth Organiser", price: 51.84, oldPrice: 199.00, category: "Household" },
  { id: 4, image: "/demo.jpg", title: "1 Pc Kothmir Basket", price: 31.32, oldPrice: 99.00, category: "Kitchen" },
  { id: 1, image: "/demo.jpg", title: "1 Pair V Thumb Cutter", price: 18.90, oldPrice: 99.00, category: "Household" },
  { id: 2, image: "/demo.jpg", title: "1 Pc Chair Mobile Stand", price: 30.00, oldPrice: 60.00, category: "Office" },
  { id: 3, image: "/demo.jpg", title: "1 Pc Cloth Organiser", price: 51.84, oldPrice: 199.00, category: "Household" },
  { id: 4, image: "/demo.jpg", title: "1 Pc Kothmir Basket", price: 31.32, oldPrice: 99.00, category: "Kitchen" },
  { id: 1, image: "/demo.jpg", title: "1 Pair V Thumb Cutter", price: 18.90, oldPrice: 99.00, category: "Household" },
  { id: 2, image: "/demo.jpg", title: "1 Pc Chair Mobile Stand", price: 30.00, oldPrice: 60.00, category: "Office" },
  { id: 3, image: "/demo.jpg", title: "1 Pc Cloth Organiser", price: 51.84, oldPrice: 199.00, category: "Household" },
  { id: 4, image: "/demo.jpg", title: "1 Pc Kothmir Basket", price: 31.32, oldPrice: 99.00, category: "Kitchen" },

  // Add more products as needed
];

const HomeProductsAll = () => {
  const [visibleCount, setVisibleCount] = useState(12);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");
  const [priceRange, setPriceRange] = useState([0, 1000]);

  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 12);
  };

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (category ? product.category === category : true) &&
    product.price >= priceRange[0] && product.price <= priceRange[1]
  );

  return (
    <section className="bg-gray-100 py-10">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Recommended For You</h2>
        <div className="flex justify-center gap-4 mb-6">
          <Input 
            placeholder="Search products..." 
            value={searchTerm} 
            onChange={(e) => setSearchTerm(e.target.value)} 
            className="w-1/3"
          />
          <Select 
            placeholder="Select Category" 
            onChange={setCategory} 
            className="w-1/4"
          >
            <Option value="">All Categories</Option>
            <Option value="Household">Household</Option>
            <Option value="Office">Office</Option>
            <Option value="Kitchen">Kitchen</Option>
          </Select>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.slice(0, visibleCount).map((product) => (
            <div key={product.id} className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center text-center">
              <img src={product.image} alt={product.title} className="w-full h-40 object-cover rounded-lg" />
              <h3 className="text-lg font-semibold text-gray-900 mt-4">{product.title}</h3>
              <p className="text-gray-600 mt-2 text-sm">
                <span className="line-through text-gray-400 mr-2">Rs.{product.oldPrice.toFixed(2)}</span>
                <span className="text-red-500 font-bold">Rs.{product.price.toFixed(2)}</span>
              </p>
              <Button className="mt-4 bg-black text-white px-4 py-2 rounded-full">Add To Cart</Button>
            </div>
          ))}
        </div>
        {visibleCount < filteredProducts.length && (
          <Button onClick={loadMore} className="mt-6 bg-blue-500 text-white px-6 py-2 rounded-full">Load More</Button>
        )}
      </div>
    </section>
  );
};

export default HomeProductsAll;