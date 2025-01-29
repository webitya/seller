import React from "react";
import { FacebookOutlined, InstagramOutlined, TwitterOutlined, YoutubeOutlined } from "@ant-design/icons";

const FooterEl = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 px-4 md:px-0">
        {/* Section 1: Brand Info */}
        <div className="col-span-2">
          <h3 className="text-xl font-semibold mb-4">Khusi Hub</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Your one-stop shop for amazing products with top-notch services. Enjoy shopping with us!
          </p>
          <div className="mt-4 flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <FacebookOutlined className="text-2xl" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <InstagramOutlined className="text-2xl" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <TwitterOutlined className="text-2xl" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <YoutubeOutlined className="text-2xl" />
            </a>
          </div>
        </div>

        {/* Section 2: Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Contact Us</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Payment & Security</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Become A Vendor</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Influencer Collaboration</a></li>
          </ul>
        </div>

        {/* Section 3: Policies */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Policies</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Return / Refund Policy</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Shipping Policy</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Terms Of Service</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">RTO Policy</a></li>
          </ul>
        </div>

        {/* Section 4: Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
          <address className="not-italic text-sm text-gray-400">
            <p>PLOT-661/3404/4586</p>
            <p>JAYADURGANAGAR, LAXMISAGAR</p>
            <p>Bhubaneswar, Odisha, India</p>
            <p className="mt-2">Phone: <a href="tel:+918144280893" className="hover:text-white">+91-8144280893</a></p>
            <p>Email: <a href="mailto:support@khusihub.com" className="hover:text-white">support@khusihub.com</a></p>
          </address>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 border-t border-gray-700 pt-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">&copy; 2024 Khusi Hub. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <img src="/visa.svg" alt="Visa" className="h-6" />
            <img src="/mastercard.svg" alt="MasterCard" className="h-6" />
            <img src="/amex.svg" alt="American Express" className="h-6" />
            <img src="/gpay.svg" alt="Google Pay" className="h-6" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterEl;