import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  MenuOutlined,
  CloseOutlined,
  WhatsAppOutlined,
  DownOutlined,
} from "@ant-design/icons";
import { Button, Drawer, Dropdown, Menu } from "antd";

const menuLinks = [
  { path: "/", name: "Home" },
  { path: "/best-seller", name: "Best Seller" },
  { path: "/all-products", name: "All Products" },
  { path: "/new-launches", name: "New Launches" },
  { path: "/contact", name: "Contact" },
];

const categoriesMenu = (
  <Menu>
    <Menu.Item key="men">
      <Link to="/categories/men">Men</Link>
    </Menu.Item>
    <Menu.Item key="women">
      <Link to="/categories/women">Women</Link>
    </Menu.Item>
    <Menu.Item key="toys">
      <Link to="/categories/toys">Toys</Link>
    </Menu.Item>
  </Menu>
);

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const location = useLocation();

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const isActive = (path) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`bg-white shadow-md px-4 py-3 flex justify-between items-center ${
        isSticky ? "fixed top-0 left-0 w-full z-20 transition-all duration-300" : ""
      }`}
    >
      {/* Logo */}
      <div>
        <Link to="/">
          <img src="/Logos/logo.svg" alt="Logo1" className="w-36" />
        </Link>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-6 text-lg font-medium">
        {menuLinks.map(({ path, name }, index) => (
          <li key={index}>
            <Link
              to={path}
              className={`${
                isActive(path) ? "text-pink-600" : "text-gray-700 hover:text-pink-500"
              } transition duration-300`}
            >
              {name}
            </Link>
          </li>
        ))}
        <li>
          <Dropdown overlay={categoriesMenu} trigger={["click"]} placement="bottomLeft">
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="text-gray-700 hover:text-pink-500 transition duration-300 flex items-center"
            >
              Categories <DownOutlined className="ml-1" />
            </a>
          </Dropdown>
        </li>
      </ul>

      {/* WhatsApp Icon */}
      <div className="hidden md:flex space-x-4">
        <a
          href="https://wa.me/yourwhatsapplink"
          target="_blank"
          rel="noreferrer"
          className="text-gray-700 "
        >
          <Button className="hover:text-green-600 transition duration-300 text-xl" icon={<WhatsAppOutlined />}>WhatsApp Now</Button>
        </a>
      </div>

      {/* Hamburger Icon */}
      <button className="md:hidden text-2xl text-gray-700" onClick={handleDrawerToggle}>
        <MenuOutlined />
      </button>

      {/* Mobile Drawer */}
      <Drawer
        placement="right"
        onClose={handleDrawerToggle}
        open={isDrawerOpen}
        className="custom-drawer"
        bodyStyle={{ padding: "1rem 0", background: "#fff" }}
        headerStyle={{ background: "#fff" }}
        closeIcon={<CloseOutlined />}
      >
        <div className="flex justify-center items-center mb-6">
          <img src="/Logos/logo.svg" alt="Logo1" className="h-10" />
        </div>

        {/* Mobile Menu */}
        <ul className="space-y-4 text-lg font-medium">
          {menuLinks.map(({ path, name }, index) => (
            <li key={index}>
              <Link
                to={path}
                className="block text-gray-700 hover:text-pink-600 transition duration-300"
                onClick={handleDrawerToggle}
              >
                {name}
              </Link>
            </li>
          ))}
          <li>
            <Dropdown overlay={categoriesMenu} trigger={["click"]} placement="bottomLeft">
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="text-gray-700 hover:text-pink-600 transition duration-300 flex items-center"
              >
                Categories <DownOutlined className="ml-1" />
              </a>
            </Dropdown>
          </li>
        </ul>
      </Drawer>
    </nav>
  );
};

export default Navbar;
